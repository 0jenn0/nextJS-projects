"use client";

import { useRouter } from "next/navigation";

export default function ContactButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/contact");
      }}
      className="text-sm font-medium bg-violet-300 rounded-xl px-2 py-1 m-3 "
    >
      Contact Me
    </button>
  );
}
