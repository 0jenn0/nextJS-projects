"use client";

import { signIn, signOut, useSession } from "next-auth/react";

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
