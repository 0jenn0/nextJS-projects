"use client";

import { Post, getPost } from "@/service/posts";
import Image from "next/image";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useRouter } from "next/navigation";

type Direction = "prev" | "next";

type Prop = {
  post: Post;
  direction: Direction;
};

type Props = {
  prevPost: Post;
  nextPost: Post;
};

export function PostButton({ post, direction }: Prop) {
  const router = useRouter();
  const style =
    "absolute inset-0 text-white z-50  font-extrabold text-4xl transform ease-in-out duration-200 hover:text-6xl";
  return (
    <div
      className="transform ease-in-out duration-200 relative w-1/2 hover:w-3/5"
      onClick={() => router.push(`/posts/${post.path}`)}
    >
      <span className={style}>
        {direction === "prev" ? (
          <SlArrowLeft className="absolute top-1/2 -translate-y-1/2 left-5" />
        ) : (
          <SlArrowRight className="absolute top-1/2 -translate-y-1/2 right-5" />
        )}
      </span>

      <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-40 text-white font-bold text-2xl">
        {post?.title
          ? post.title
          : direction === "next"
          ? "다음 글이 없습니다."
          : "이전 글이 없습니다."}
      </p>

      {post?.path ? (
        <Image
          className="w-100 h-60 z-20 object-cover"
          src={`/images/posts/${post?.path}.jpeg`}
          alt="prev Thumbnail"
          width={2000}
          height={2000}
        />
      ) : (
        <div className="w-100 h-60 z-20 object-cover inset-2 rounded-bl-xl bg-gray-300"></div>
      )}
      <div className="absolute z-0 inset-0 bg-black opacity-50"></div>
    </div>
  );
}

export default function OtherPosts({ prevPost, nextPost }: Props) {
  return (
    <section className="flex w-full cursor-pointer">
      <PostButton post={prevPost} direction="prev" />
      <PostButton post={nextPost} direction="next" />
    </section>
  );
}
