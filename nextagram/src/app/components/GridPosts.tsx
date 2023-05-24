"use client";

import { Post } from "../../../types/Post";
import useSWR from "swr";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity";
import PostCard from "./PostCard";

export default function GridPosts({ email }: { email: string }) {
  const id = email.split(/%40|@/)[0];

  const postsQuery = useSWR(
    groq`*[_type == 'project' && user == "${id}"]`,
    (query) => client.fetch(query)
  );

  if (postsQuery.isLoading == true) return <div>Loading . . </div>;
  postsQuery.data.map((post: Post) => console.log(post));
  return (
    <section className="w-screen flex flex-col gap-6 items-center py-5 ">
      {postsQuery.data.map((post: Post) => (
        <PostCard post={post} id={id} />
      ))}
    </section>
  );
}
