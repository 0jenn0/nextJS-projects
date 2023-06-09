"use client";

import { ProfileUser } from "@/model/user";
import GridPosts from "./GridPosts";
import { useState } from "react";

type Props = {
  user: ProfileUser;
};

export type Tab = "POST" | "SAVED" | "LIKED";

export default function UserPosts({ user }: Props) {
  const tabArr: Tab[] = ["POST", "SAVED", "LIKED"];
  const [tab, setTab] = useState<Tab>("POST");

  return (
    <>
      <menu className="flex w-full border-t border-neutral-200 p-0 justify-center ">
        <ul className="w-1/2 flex justify-between">
          {tabArr.map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={
                tab === item
                  ? "border-t border-neutral-400 p-3 font-semibold text-black"
                  : "p-3 text-neutral-500"
              }
            >
              {item}
            </button>
          ))}
        </ul>
      </menu>
      <GridPosts tab={tab} username={user.username} />
    </>
  );
}
