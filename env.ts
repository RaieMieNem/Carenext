import { z } from "zod";

const envSchema = z.object({
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string().url(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  EMAIL_FROM: z.string(),
  EMAIL_USER: z.string(),
  EMAIL_PASS: z.string(),

  DATABASE_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);
