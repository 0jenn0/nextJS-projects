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
      className="text-center bg-white rounded-lg drop-shadow-md cursor-pointer"
      onClick={() => router.push(`/posts/${post.path}`)}
    >
      <Image
        className="m-auto rounded-tr-lg rounded-tl-lg"
        src={`/images/posts/${post.path}.png`}
        alt="Thumbnail"
        width={800}
        height={800}
      />
      <p className="flex justify-end">{post.date}</p>
      <p>{post.title}</p>
      <p>{post.description}</p>
      <div>{post.category}</div>
    </div>
  );
}
