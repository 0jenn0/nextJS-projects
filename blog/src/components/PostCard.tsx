"use client";

import Image from "next/image";
import { Post } from "../service/posts";
import { useRouter } from "next/navigation";

type Props = {
  post: Post;
};

const colorSet = ["bg-rose-100", "bg-sky-100", "bg-yellow-100", "bg-green-100"];

const categories = ["my story", "frontend", "backend", "javascript"];

const categoryMap = new Map();

categories.forEach((category, index) => {
  categoryMap.set(category, colorSet[index]);
});

console.log(categoryMap);

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
        className="m-auto rounded-lg w-full object-cover aspect-[1.5/1]"
        src={`/images/posts/${post.path}.jpeg`}
        alt="Thumbnail"
        width={800}
        height={800}
      />
      {/* <div
        className={`w-500 h-500 bg-[url('/images/posts/${post.path}.jpeg')] bg-cover bg-no-repeat bg-center`}
      /> */}

      <div className="flex w-full mr-2 justify-end items-end text-sm text-gray-500">
        {post.date}
      </div>
      <p className="text-medium font-semibold">{post.title}</p>
      <p className="text-sm text-gray-700">{post.description}</p>
      <span
        className={`rounded-full px-2 py-1 text-sm m-3 ${categoryMap.get(
          post.category
        )}`}
      >
        {post.category}
      </span>
    </div>
  );
}
