"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import GridPosts from "./GridPosts";
import useSWR from "swr";

export default function Hero() {
  // const { data } = useSession();
  const { data, status } = useSession();
  const email = data?.user?.email!;

  if (status === "authenticated")
    return (
      <main className="flex w-full justify-center">
        <GridPosts email={email} />
      </main>
    );
  return <p>Loading</p>;
}
