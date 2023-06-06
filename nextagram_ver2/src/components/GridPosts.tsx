"use client";

import useSWR from "swr";
import { Menu } from "@/app/user/[username]/page";
import { FullPost, SimplePost } from "@/model/post";

type Props = {
  checked: Menu;
  username: string;
};

export default function GridPosts({ checked, username }: Props) {
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR<SimplePost[]>(`/api/profilePost/${username}/${checked}`);

  posts && console.log(posts);

  return (
    <div className="grid grid-cols-3 gap-3 justify-center items-center">
      {posts &&
        posts.map((post) => (
          <img
            src={post.image}
            className="w-[300px] aspect-square"
            key={post.id}
          />
        ))}
    </div>
  );
}
