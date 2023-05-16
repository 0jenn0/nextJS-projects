"use client";

import { useRouter } from "next/navigation";

export default function ContactButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/contact");
      }}
      className="text-lg font-medium rounded-full px-4 py-2 m-3
      transition ease-in-out duration-200 hover:bg-rose-300 hover:text-white bg-rose-200
      "
    >
      Contact Me
    </button>
  );
}
