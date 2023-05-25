"use client";

import ColorButton from "@/components/ColorButton";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="flex justify-center mt-20">
      <ColorButton
        text="Sign In with Google"
        onClick={() => signIn("google")}
      />
    </div>
  );
}
