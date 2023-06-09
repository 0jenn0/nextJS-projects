"use client";

import useSWR from "swr";
import { Tab } from "./UserPosts";
import { SimplePost } from "@/model/post";
import FeedCard from "./FeedCard";

type Props = {
  tab: Tab;
  username: string;
};

export default function GridPosts({ tab, username }: Props) {
  const {
    data: posts,
    isLoading,
    error,
  } = useSWR<SimplePost[]>(`/api/users/${username}/${tab}`);

  return (
    <ul className="w-2/3 grid grid-cols-3 gap-3 justify-center items-center">
      {posts &&
        posts.map((post, index) => (
          <li key={post.id}>
            <FeedCard post={post} priority={index < 6} />
          </li>
        ))}
    </ul>
  );
}
