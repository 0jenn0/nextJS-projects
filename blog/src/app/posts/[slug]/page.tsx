import { getPost } from "@/service/posts";
import path from "path";
import { promises as fs } from "fs";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import PostNotFound from "./not-found";
import { notFound } from "next/navigation";
import { AiOutlineCalendar } from "react-icons/ai";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

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

  return (
    <div className="w-11/12 m-auto bg-slate-100 rounded-xl mb-10">
      <Image
        className="h-48 w-full object-cover rounded-t-xl"
        alt="Header"
        src={`/images/posts/${post!.path}.png`}
        width={2000}
        height={1000}
      />
      <span className="flex justify-end items-center m-2 text-sm font-medium text-slate-500">
        <AiOutlineCalendar className="mr-1 " />
        {post.date}
      </span>
      <h1 className="text-3xl pl-4 font-bold">{post.title}</h1>
      <div className="w-1/6 border-solid border-2 border-sky-300 ml-4 mt-2"></div>
      <article className="prose p-4">
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
      </article>
    </div>
  );
}
