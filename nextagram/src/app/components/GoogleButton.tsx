"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { signUp } from "next-auth-sanity/client";
import Link from "next/link";
import { useState } from "react";
import { postAuthor } from "../../../sanity/sanity-utils";
import { useRouter } from "next/navigation";

export type Author = {
  name: string;
  imageUrl: string;
};
export default function GoogleButton() {
  const { data, status } = useSession();

  const handleSignUp = () => {
    signIn("google");
  };

  if (status === "authenticated" && data.user) {
    const author = { name: data.user.name!, imageUrl: data.user.image! };
    postAuthor(author);
  }

  return (
    <>
      <button onClick={() => handleSignUp()}>Sign Up</button>;
      <button onClick={() => signOut()}>sign out</button>
    </>
  );
}
