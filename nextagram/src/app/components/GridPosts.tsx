"use client";

import { Post } from "../../../types/Post";
import useSWR from "swr";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity";
import PostCard from "./PostCard";
import { getPosts } from "../../../sanity/sanity-utils";

export default function GridPosts({ email }: { email: string }) {
  const id = email.split(/%40|@/)[0];

  const followQuery = useSWR(
    groq`*[_type == 'userCustom' && email == '${id}@gmail.com']{
        following[]->{
            _id,
          }
      }[1]`,
    (query) => client.fetch(query)
  );

  if (followQuery.isLoading) {
    <div>Loading . . </div>;
  }
  // console.log(followQuery.data["following"][0]["_id"]);

  const followArr = [];
  for (let i = 0; i < followQuery.data["following"].length; i++) {
    followArr.push(followQuery.data["following"][i]["_id"]);
  }
  console.log(followArr);
  // followArr.forEach()

  return (
    <section className="w-screen flex flex-col gap-6 items-center py-5 ">
      <section></section>
      {/* {postsQuery.data.map((post: Post) => (
        <PostCard post={post} id={id} />
      ))} */}

      {/* {followQuery.data
        .map((post: any) => getPosts(post._ref))
        .map((post: Post) => (
          <PostCard post={post} id={id} />
        ))} */}
      <h1>Home</h1>
    </section>
  );
}
