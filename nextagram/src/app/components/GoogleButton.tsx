"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { signUp } from "next-auth-sanity/client";
import Link from "next/link";
import { useState } from "react";
import { postAuthor } from "../../../sanity/sanity-utils";
import { useRouter } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Session } from "inspector";

export type Author = {
  name: string;
  imageUrl: string;
};
export default function GoogleButton() {
  const { data, status } = useSession();
  const handleSignUp = () => {
    signIn("google");
  };

  return !data ? (
    <button onClick={() => handleSignUp()}>Sign Up</button>
  ) : (
    <button onClick={() => signOut()}>sign out</button>
  );
}
