"use client";

import { Post } from "@/service/posts";
import PostCard from "./PostCard";
import { useState } from "react";
import CategoryMenu from "./CategoryMenu";

const categories = [
  "All posts",
  "my story",
  "frontend",
  "backend",
  "javascript",
];

type Props = {
  posts: Post[];
};

export default function Filterable({ posts }: Props) {
  const [selected, setSelected] = useState("All posts");

  return (
    <div className="w-full m-auto flex-col mt-20  justify-center items-center md:flex">
      <CategoryMenu categories={categories} onClick={setSelected} />

      <section className="m-auto w-3/4 grid   md:grid-cols-3  lg:grid-cols-5 grid-cols-1 gap-11 mb-10">
        {selected === "All posts"
          ? posts.map((post, index) => <PostCard post={post} key={index} />)
          : posts
              .filter((post) => post.category === selected)
              .map((post, index) => <PostCard post={post} key={index} />)}
      </section>
    </div>
  );
}
