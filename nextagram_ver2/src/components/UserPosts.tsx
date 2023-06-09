"use client";

import { ProfileUser } from "@/model/user";
import GridPosts from "./GridPosts";
import { useState } from "react";

type Props = {
  user: ProfileUser;
};

export type Tab = "POST" | "SAVED" | "LIKED";

export default function UserPosts({ user }: Props) {
  const menuArr: Tab[] = ["POST", "SAVED", "LIKED"];
  const [tab, setTab] = useState<Tab>("POST");

  return (
    <>
      <menu className="flex w-full border-t border-neutral-200 p-0 justify-center">
        <ul className="w-1/2 flex justify-between">
          {menuArr.map((menu) => (
            <button
              key={menu}
              onClick={() => setTab(menu)}
              className={
                tab === menu ? "border-t border-neutral-400 p-3" : "p-3"
              }
            >
              {menu}
            </button>
          ))}
        </ul>
      </menu>
      {user && <GridPosts tab={tab} username={user.username} />}
    </>
  );
}
