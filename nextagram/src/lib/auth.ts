import { client } from "./sanity";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { SanityAdapter, SanityCredentials } from "next-auth-sanity";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID ?? "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_PASS ?? "",
      authorization:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=select_account",
    }),
    SanityCredentials(client, "userCustom"),
  ],
  session: {
    strategy: "jwt",
  }, // api/auth/session에 jwt 받아옴
  // callbacks: {
  //   async session({ session, token, user }) {
  //     return session;
  //   },
  //   async jwt({ token, user, account, profile, isNewUser }) {
  //     return token;
  //   },

  //   // async signIn({ user, account, profile, email, credentials }) {
  //   //   const isAllowedToSignIn = true;
  //   //   if (isAllowedToSignIn) {
  //   //     console.log("로그인 성공");
  //   //     return true;
  //   //   } else {
  //   //     // Return false to display a default error message
  //   //     console.log("로그인 실패");
  //   //     return false;

  //   //     // Or you can return a URL to redirect to:
  //   //     // return '/unauthorized'
  //   //   }
  //   // },

  // },
  callbacks: {
    // async signIn({ user: { id, name, image, email } }) {
    //   if (!email) {
    //     return false;
    //   }
    // },
    async session({ session, token }) {
      const user = session?.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  secret: "any-secret-word",
  adapter: SanityAdapter(client, {
    schemas: {
      verificationToken: "projects",
      account: "projects",
      user: "userCustom",
    },
  }),
};
