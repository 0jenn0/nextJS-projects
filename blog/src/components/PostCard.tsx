"use client";

import Image from "next/image";
import { Post } from "../service/posts";
import { useRouter } from "next/navigation";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  const router = useRouter();
  return (
    <div
      className="text-center bg-white rounded-lg cursor-pointer flex flex-col items-center
       transition ease-in-out duration-200 hover:-translate-y-2  hover:drop-shadow aspect-[3/1]
      "
      onClick={() => router.push(`/posts/${post.path}`)}
    >
      <Image
        className="m-auto rounded-tr-lg rounded-tl-lg"
        src={`/images/posts/${post.path}.png`}
        alt="Thumbnail"
        width={800}
        height={800}
      />
      <div className="flex w-full mr-2 justify-end items-end text-sm text-gray-500">
        {post.date}
      </div>
      <p className="text-medium font-semibold">{post.title}</p>
      <p className="text-sm text-gray-700">{post.description}</p>
      <span className="bg-sky-200 rounded-full px-2 py-1 text-sm m-3">
        {post.category}
      </span>
    </div>
  );
}
