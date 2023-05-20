import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";
import { client } from "@/lib/sanity";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID ?? "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_PASS ?? "",
    }),
    SanityCredentials(client),
  ],
  session: {
    strategy: "jwt",
  },
  // secret: "any-secret-word",
  adapter: SanityAdapter(client),
};
