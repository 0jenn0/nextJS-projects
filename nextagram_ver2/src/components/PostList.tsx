"use client";

import useSWR from "swr";
import { SimpleUser } from "@/model/user";
import { Post } from "@/model/post";
import PostCard from "./PostCard";

export default function PostList() {
  const {
    data: posts,
    isLoading: loading,
    error,
  } = useSWR<Post[]>("/api/following");

  if (!loading) <p>Loading .. </p>;
  console.log("posts:", posts);
  return (
    <section className="flex flex-col gap-5 items-center">
      {posts?.length !== 0 && posts
        ? posts.map((post: Post) => <PostCard post={post} />)
        : ""}
    </section>
  );
}
