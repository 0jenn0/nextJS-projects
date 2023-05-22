"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export default function UserPage() {
  const { data } = useSession();
  const { name, email, image } = data!.user!;

  return (
    <section className="flex gap-4 border-b border-gray-200">
      <Image
        className="rounded-full"
        src={image!}
        alt="Profile Img"
        width={100}
        height={100}
      />
      <article className="flex flex-col gap-4">
        <div className="flex gap-4">
          <p>{email}</p>
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
