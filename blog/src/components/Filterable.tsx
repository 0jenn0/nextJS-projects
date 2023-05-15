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
    <div className="w-full m-auto flex">
      <section className="w-3/4 grid grid-cols-4 gap-11 mb-10 ml-20">
        {selected === "All posts"
          ? posts.map((post) => <PostCard post={post} />)
          : posts
              .filter((post) => post.category === selected)
              .map((post) => <PostCard post={post} />)}
      </section>
      <CategoryMenu categories={categories} onClick={setSelected} />
    </div>
  );
}
