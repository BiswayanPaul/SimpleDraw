
import { z } from "zod";

// Define your credential schema using Zod
export const credentialsSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});

export type Credentials = z.infer<typeof credentialsSchema>; // This infers the TypeScript type from your schema
