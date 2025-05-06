import { defineConfig } from "drizzle-kit";
import { env } from "~/utils/env";

export default defineConfig({
  schema: "./app/db/schema.ts",
  dialect: "postgresql",
  out: "./drizzle",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
