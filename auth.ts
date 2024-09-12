import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { getUserByEmail } from "./lib/user"
import { credentialsSchema } from "./lib/schema";
import bcrypt from "bcryptjs"
// Your own logic for dealing with plaintext password strings; be careful!

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validation = credentialsSchema.safeParse(credentials)

        if (!validation.success) {
          throw new Error("Credentials not validated")
        }

        const { email, password } = validation.data;

        const user = await getUserByEmail(email);

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.")
        }
        // logic to salt and hash password
        const hashPassword = await bcrypt.hash(password, 10);
        // logic to verify if the user exists
        const validateUser = bcrypt.compare(user.password, hashPassword);

        if (!validateUser) {
          throw new Error("Password is incorrect");
        }

        // return user object with their profile data
        return user
      },
    }),
  ],
})
