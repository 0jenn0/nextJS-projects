"use client";

import useSWR from "swr";
import PostListCard from "./PostListCard";
import { SimplePost } from "@/model/post";
import { GridLoader } from "react-spinners";

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
      {loading && (
        <div>
          <GridLoader color="red" />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post: SimplePost) => (
            <li key={post.id} className="flex items-center justify-center">
              <PostListCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
