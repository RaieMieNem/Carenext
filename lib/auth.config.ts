import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { prisma } from "@/lib/prisma";

export default {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    Credentials({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
            const email = credentials?.email as string;
            const password = credentials?.password as string;
          
            if (!email || !password) return null;
          
            const user = await prisma.user.findUnique({ where: { email } });
          
            if (!user) return null;
          
            const isValidPassword = user.password === password;
          
            if (!isValidPassword) return null;
          
            console.log("✅ Utilisateur autorisé dans authorize :", user); // log ici
          
            return {
              ...user,
              id: user.id.toString(), // important
            };
        }          
          
    }),
      
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },
} satisfies NextAuthConfig;
