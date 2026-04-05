import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_SITE_NAME: z.string().default("My Site"),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  MAILJET_API_KEY: z.string(),
  MAILJET_SECRET_KEY: z.string(),
  SITE_MAIL_SENDER: z.string().email(),
  SITE_MAIL_RECEIVER: z.string().email(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("❌ Neispravne environment varijable:");
  console.error(parsed.error.flatten().fieldErrors);
  if (process.env.NODE_ENV === "production") {
    process.exit(1);
  }
}

export const env = parsed.success ? parsed.data : envSchema.parse({});
