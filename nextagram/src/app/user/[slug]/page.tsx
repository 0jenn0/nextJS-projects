"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import useSWR from "swr";
import { client } from "@/lib/sanity";
import groq from "groq";

type Props = {
  params: {
    slug: string;
  };
};

export default function UserPage({ params }: Props) {
  // const { data } = useSession();
  // const { name, email, image } = data!.user!;

  const id = params.slug.split("%40")[0];
  const {
    data: user,
    error,
    isLoading,
  } = useSWR(
    groq`*[_type == "userCustom"][email=="${id}@gmail.com"]`,
    (query) => client.fetch(query)
  );

  if (isLoading === true) return <h1>Loading ...</h1>;
  return (
    <section className="flex gap-4 border-b border-gray-200">
      <Image
        className="rounded-full"
        src={user[0].image}
        alt="Profile Img"
        width={100}
        height={100}
      />
      <article className="flex flex-col gap-4">
        <div className="flex gap-4">
          <p>{user[0].email}</p>
          <button>팔로우</button>
        </div>
        <div className="flex gap-4">
          <p>게시물</p>
          <p>팔로워</p>
          <p>팔로우</p>
        </div>
      </article>
    </section>
  );
}
