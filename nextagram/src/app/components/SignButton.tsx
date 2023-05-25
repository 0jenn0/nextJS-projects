"use client";
import { signIn } from "next-auth/react";

export default function GoogleButton() {
  const handleSignUp = () => {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };

  return (
    <button
      className="border-2 border-rose-100 rounded-full py-2 px-3"
      onClick={() => handleSignUp()}
    >
      Sign in with Google
    </button>
  );
}
