"use client";

import useSWR from "swr";
import PostListCard from "./PostListCard";
import { SimplePost } from "@/model/post";
import GridSpinner from "./ui/GridSpinner";

export default function PostList() {
  const {
    data: posts,
    isLoading: loading,
    error,
  } = useSWR<SimplePost[]>("/api/posts");

  if (!loading) <p>Loading .. </p>;
  return (
    <section className="flex flex-col gap-5 items-center">
      {loading && (
        <div>
          <GridSpinner />
        </div>
      )}
      {posts && (
        <ul className="w-full flex flex-col gap-5">
          {posts.map((post: SimplePost, index) => (
            <li key={post.id} className="flex items-center justify-center">
              <PostListCard post={post} priority={index < 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
