"use client";

import useSWR from "swr";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity";
import { Post } from "../../../types/Post";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import {
  BsBookmark,
  BsBookmarkFill,
  BsHeart,
  BsHeartFill,
} from "react-icons/bs";
import { SlEmotsmile } from "react-icons/sl";
import { useState } from "react";

export default function PostCard({ post, id }: { post: Post; id: string }) {
  const userQuery = useSWR(
    groq`*[_type == "userCustom"][email=="${id}@gmail.com"]`,
    (query) => client.fetch(query)
  );

  const [liked, setLiked] = useState<boolean>(false);
  const [bookmark, setBookmark] = useState<boolean>(false);

  if (userQuery.isLoading == true) return <div> Loading . . . </div>;

  console.log("dksl");
  console.log(post.text);
  return (
    <section className="bg-white rounded-lg w-1/3 flex flex-col border border-gray-50 drop-shadow">
      <header className="flex w-100  p-3 border-b border-gray-200 items-center gap-2">
        <Image
          src={userQuery.data[0].image}
          width={40}
          height={40}
          className="rounded-full"
          alt="Profile Image"
        />
        <p className="font-semibold text-sm">jenn0.6n</p>
      </header>
      <Image
        src={post.imageUrl}
        alt="photo"
        width={350}
        height={350}
        className="inset-0 w-full"
      />
      {/* <p>{post.text[0].}</p> */}
      <article className=" py-3  w-96 mx-auto gap-2">
        <div className="flex justify-between items-center text-xl mb-3">
          <button onClick={() => setLiked((prev) => !prev)}>
            {liked ? <BsHeartFill className="text-red-600" /> : <BsHeart />}
          </button>
          <button onClick={() => setBookmark((prev) => !prev)}>
            {bookmark ? <BsBookmarkFill /> : <BsBookmark />}
          </button>
        </div>
        <p>{`${post.liked ? post.liked : 0} liked`}</p>
        <div className="flex gap-2 items-center">
          <p className="font-semibold text-sm">{post.user}</p>
          <p>{post.text[0].children[0].text}</p>
        </div>
      </article>

      <form
        action=""
        className="flex justify-center items-center gap-2  w-96 mx-auto border-t border-gray-200 py-2"
      >
        <label htmlFor="">
          <SlEmotsmile />
        </label>
        <input type="text" placeholder="댓글 남기기" className="grow p-2" />
        <button>Send</button>
      </form>
    </section>
  );
}
