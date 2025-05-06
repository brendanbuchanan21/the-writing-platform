import { createAPIFileRoute } from "@tanstack/react-start/api";
import { AuthenticationError } from "~/use-cases/errors";
import { getSegmentByIdUseCase } from "~/use-cases/segments";
import { getAuthenticatedUser } from "~/utils/auth";
import { stat } from "fs/promises";
import { createReadStream, type ReadStream } from "fs";

function logMemoryUsage(label: string) {
  const used = process.memoryUsage();
  console.log(`=== Memory Usage [${label}] ===`);
  console.log(`Heap Used: ${Math.round(used.heapUsed / 1024 / 1024)}MB`);
  console.log(`Heap Total: ${Math.round(used.heapTotal / 1024 / 1024)}MB`);
  console.log(`RSS: ${Math.round(used.rss / 1024 / 1024)}MB`);
}

function createWebStreamFromNodeStream(nodeStream: ReadStream) {
  logMemoryUsage(`Stream Start`);

  let isDestroyed = false;
  let controller: ReadableStreamDefaultController;

  // Create cleanup function
  const cleanup = () => {
    if (!isDestroyed) {
      isDestroyed = true;
      nodeStream.destroy();
      // Remove all listeners to prevent memory leaks
      nodeStream.removeAllListeners();
    }
  };

  return new ReadableStream({
    start(c) {
      controller = c;

      nodeStream.on("data", async (chunk) => {
        if (isDestroyed) return;

        try {
          nodeStream.pause(); // Pause immediately after receiving chunk
          await controller.enqueue(chunk);
        } catch (error) {
          console.error("Chunk processing error:", error);
          cleanup();
          controller.error(error);
        }
      });

      nodeStream.on("end", () => {
        cleanup();
        controller.close();
      });

      nodeStream.on("error", (err) => {
        console.error("Stream error:", err);
        cleanup();
        controller.error(err);
      });
    },

    pull() {
      if (!isDestroyed && nodeStream.isPaused()) {
        nodeStream.resume();
      }
    },

    cancel() {
      cleanup();
    },
  });
}

export const APIRoute = createAPIFileRoute("/api/segments/$segmentId/video")({
  GET: async ({ request, params }) => {
    // Validate access
    const user = await getAuthenticatedUser();

    const segmentId = Number(params.segmentId);
    if (isNaN(segmentId)) throw new Error("Invalid segment ID");

    const segment = await getSegmentByIdUseCase(segmentId);
    if (!segment) throw new Error("Segment not found");
    if (!segment.videoKey) throw new Error("Video not attached to segment");

    if (segment.isPremium) {
      if (!user) throw new AuthenticationError();
      if (!user.isPremium && !user.isAdmin) {
        throw new Error("You don't have permission to access this video");
      }
    }

    // Get file info
    const uploadDir = process.env.UPLOAD_DIR;
    if (!uploadDir)
      throw new Error("UPLOAD_DIR environment variable is not set");
    const filePath = `${uploadDir}/${segment.videoKey}`;
    const stats = await stat(filePath);

    // Handle range request
    const range = request.headers.get("range");
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1]
        ? parseInt(parts[1], 10)
        : Math.min(start + 1024 * 1024, stats.size - 1); // Limit chunk size to 1MB
      const chunksize = end - start + 1;

      const stream = createReadStream(filePath, {
        start,
        end,
        highWaterMark: 16 * 1024, // Reduce buffer size to 16KB
        autoClose: true,
      });
      const webStream = createWebStreamFromNodeStream(stream);

      return new Response(webStream, {
        status: 206,
        headers: {
          "Content-Range": `bytes ${start}-${end}/${stats.size}`,
          "Accept-Ranges": "bytes",
          "Content-Length": chunksize.toString(),
          "Content-Type": "video/mp4",
        },
      });
    }

    // Handle full file request
    const stream = createReadStream(filePath, {
      highWaterMark: 16 * 1024, // Reduce buffer size to 16KB
      autoClose: true,
    });
    const webStream = createWebStreamFromNodeStream(stream);

    return new Response(webStream, {
      headers: {
        "Content-Type": "video/mp4",
        "Content-Length": stats.size.toString(),
        "Accept-Ranges": "bytes",
        "Cache-Control": "public, max-age=31536000, immutable",
        ETag: `"${stats.mtimeMs}"`,
      },
    });
  },
});
