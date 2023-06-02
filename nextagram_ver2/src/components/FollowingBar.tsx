"use client";

import { User } from "@/model/user";
import useSWR from "swr";

type Props = {
  user: User;
};

export default function FollowingBar({ user: { username } }: Props) {
  const { data, isLoading, error } = useSWR("/api/me");
  console.log(data);
  return <div></div>;
}
