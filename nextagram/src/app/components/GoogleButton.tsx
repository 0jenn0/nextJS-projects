"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function GoogleButton() {
  const [isLogin, setIsLogin] = useState<boolean>();

  return <button onClick={() => signIn("google")}>Sign In</button>;
  //   return <button onClick={() => signOut()}>sign out</button>;
}
