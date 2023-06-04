"use client";

import useSWR from "swr";
import PostCard from "./PostCard";
import { SimplePost } from "@/model/post";

export default function PostList() {
  const {
    data: posts,
    isLoading: loading,
    error,
  } = useSWR<SimplePost[]>("/api/posts");

  if (!loading) <p>Loading .. </p>;
  console.log("posts:", posts);
  return (
    <section className="flex flex-col gap-5 items-center">
      {posts?.length !== 0 && posts
        ? posts.map((post: SimplePost) => <PostCard post={post} />)
        : ""}
    </section>
  );
}
