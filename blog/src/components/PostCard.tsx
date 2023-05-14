"use client";

import Image from "next/image";
import { Post } from "../service/posts";
import { useRouter } from "next/navigation";

export default function PostCard({
  path,
  date,
  title,
  description,
  category,
}: Post) {
  const router = useRouter();
  return (
    <div
      className="text-center bg-white rounded-lg drop-shadow-md"
      onClick={() => router.push(`/posts/${path}`)}
    >
      <Image
        className="m-auto rounded-tr-lg rounded-tl-lg"
        src={`/images/posts/${path}.png`}
        alt="Thumbnail"
        width={800}
        height={800}
      />
      <p className="flex justify-end">{date}</p>
      <p>{title}</p>
      <p>{description}</p>
      <div>{category}</div>
    </div>
  );
}
