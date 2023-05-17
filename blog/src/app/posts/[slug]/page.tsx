import { getIndexOfPost, getPost, getPostByIndex } from "@/service/posts";
import path from "path";
import { promises as fs } from "fs";
import React from "react";
import Image from "next/image";
import PostNotFound from "./not-found";
import { notFound } from "next/navigation";
import { AiOutlineCalendar } from "react-icons/ai";
import OtherPosts from "@/components/OtherPosts";
import Markdown from "@/components/Markdown";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostsPage({ params }: Props) {
  const post = await getPost(params.slug);

  if (post === undefined) {
    notFound();
  }

  const filePath = path.join(process.cwd(), "/data/posts", `${params.slug}.md`);
  const markdown = await fs.readFile(filePath, "utf-8");
  const index = await getIndexOfPost(params.slug);

  const prevPost = await getPostByIndex(index - 1);
  const nextPost = await getPostByIndex(index + 1);

  return (
    <div className="w-full m-auto bg-slate-100 rounded-xl mb-10 mt-20 md:w-2/3">
      <Image
        className="h-60 w-full object-cover rounded-t-xl"
        alt="Header"
        src={`/images/posts/${post!.path}.jpeg`}
        width={2000}
        height={1000}
      />
      <span className="flex justify-end items-center m-2 text-sm font-medium text-slate-500">
        <AiOutlineCalendar className="mr-1 " />
        {post.date}
      </span>
      <h1 className="text-3xl pl-4 font-bold">{post.title}</h1>
      <div className="w-1/6 border-solid border-2 border-sky-300 ml-4 mt-2"></div>
      <article className="prose p-10 max-w-none">
        {/* <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown> */}
        <Markdown markdown={markdown} />
      </article>
      <OtherPosts prevPost={prevPost} nextPost={nextPost} />
    </div>
  );
}
