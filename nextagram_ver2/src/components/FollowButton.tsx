"use client";

import { HomeUser, ProfileUser } from "@/model/user";
import useSWR from "swr";

type Props = {
  user: ProfileUser;
};

export default function FollowButton({ user }: Props) {
  const { username } = user;
  const { data: loggedInUser, isLoading, error } = useSWR<HomeUser>("/api/me");
  const showButton = loggedInUser && loggedInUser.username !== user.username;
  const following =
    loggedInUser &&
    loggedInUser.following.find((item) => item.username === username);
  const text = following ? "Unfollow" : "Follow";
  const buttonStyle = following ? "bg-red-400" : "bg-blue-400";

  return (
    <button
      className={`text-white px-2 py-[0.2rem] rounded-2xl ${buttonStyle}`}
    >
      {text}
    </button>
  );
}
