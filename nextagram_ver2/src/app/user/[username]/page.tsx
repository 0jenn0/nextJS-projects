"use client";

import Avatar from "@/components/Avatar";
import GridPosts from "@/components/GridPosts";
import FollowButton from "@/components/FollowButton";
import { ProfileUser } from "@/model/user";
import { useState } from "react";
import useSWR from "swr";
import UserProfile from "@/components/UserProfile";

type Props = {
  params: {
    username: string;
  };
};

export type Menu = "POST" | "SAVED" | "LIKED";

const menuArr: Menu[] = ["POST", "SAVED", "LIKED"];

export default function page({ params: { username } }: Props) {
  const {
    data: user,
    isLoading: loading,
    error,
  } = useSWR<ProfileUser>(`/api/profile/${username}`);

  const [checked, setChecked] = useState<Menu>("POST");

  if (loading) return <p>Loading</p>;

  return (
    <section className="w-full flex flex-col items-center">
      {user && <UserProfile user={user} />}

      <menu className="flex w-full border-t border-neutral-200 p-0 justify-center">
        <ul className="w-1/2 flex justify-between">
          {menuArr.map((menu) => (
            <button
              key={menu}
              onClick={() => setChecked(menu)}
              className={
                checked === menu ? "border-t border-neutral-400 p-3" : "p-3"
              }
            >
              {menu}
            </button>
          ))}
        </ul>
      </menu>

      {user && <GridPosts checked={checked} username={user.username} />}
    </section>
  );
}
