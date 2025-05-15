import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

// Example image URLs (replace or pass imageId from real data)
const mockComments = [
  {
    id: 1,
    author: "Jane Doe",
    type: "Comment",
    text: "amazing story i love the part where x overcame ....",
    imageId: "https://api.dicebear.com/7.x/thumbs/svg?seed=JaneDoe",
  },
  {
    id: 2,
    author: "John Smith",
    type: "Comment",
    text: "your ability to convey ambigous perspectives yet ",
    imageId: "https://api.dicebear.com/7.x/thumbs/svg?seed=JohnSmith",
  },
  {
    id: 3,
    author: "Alice Johnson",
    type: "Comment",
    text: "thanks, this read made me feel right at home",
    imageId: "https://api.dicebear.com/7.x/thumbs/svg?seed=AliceJohnson",
  },
];

export function Adminpage() {
  const [responses, setResponses] = useState<Record<number, string>>({});
  const [viewMode, setViewMode] = useState<"recent" | "all">("recent");

  const handleResponseChange = (id: number, value: string) => {
    setResponses((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <header className="relative min-h-screen w-full bg-gradient-to-b from-rose-50/50 to-rose-100/30 px-4 sm:px-6 md:px-12 py-12">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-64 w-[500px] h-[500px] bg-rose-100/50 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-pink-50/50 rounded-full opacity-40 blur-3xl"></div>
      </div>

      {/* Page content */}
      <main className="relative z-10 max-w-5xl mx-auto overflow-x-hidden">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 text-center sm:text-left">
            Admin Dashboard
          </h1>

          <select
            value={viewMode}
            onChange={(e) => setViewMode(e.target.value as "recent" | "all")}
            className="mt-4 sm:mt-0 h-8 text-sm border border-rose-200 rounded-md px-3 bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-rose-300"
          >
            <option value="recent">View Recent</option>
            <option value="all">See All</option>
          </select>
        </div>

        {/* Comments Section */}
        <div className="space-y-6">
          {mockComments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white rounded-lg shadow p-6 flex flex-col gap-4 border border-rose-100 mb-4"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3 min-w-0">
                  <Avatar className="w-9 h-9 shrink-0">
                    <AvatarImage
                      src={comment.imageId || undefined}
                      alt={comment.author}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {comment.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-lg font-medium text-gray-800 truncate">
                    {comment.author}
                  </span>
                </div>
                <span className="text-sm px-3 py-1 bg-rose-100 text-rose-700 rounded-full whitespace-nowrap">
                  {comment.type}
                </span>
              </div>

              <p className="text-gray-700">{comment.text}</p>
              <textarea
                rows={3}
                placeholder="Write a response..."
                className="w-full mt-2 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-200 sm:text-base"
                value={responses[comment.id] || ""}
                onChange={(e) => handleResponseChange(comment.id, e.target.value)}
              />
              <div className="text-right">
                <button
                  className="px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-700 text-sm sm:text-base sm:px-6 sm:py-3"
                  onClick={() =>
                    alert(`Reply to comment #${comment.id}: ${responses[comment.id]}`)
                  }
                >
                  Send Reply
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </header>
  );
}
