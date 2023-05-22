"use client";
import { useSession } from "next-auth/react";
import { postPosts } from "../../../sanity/sanity-utils";
import { v4 as uuid } from "uuid";

export default function SendButton() {
  const { data } = useSession();
  const user = data?.user;
  const userId = user?.email?.split("@")[0];
  const date = new Date();

  const post = {
    _type: "project",
    _id: uuid(),
    name: `post | ${userId} `,
    content: [
      {
        _type: "block",
        _key: uuid(),
        children: [
          {
            _key: "awlkefjawleijfawefa",
            _type: "span",
            text: "Content text here",
          },
        ],
        markDefs: [],
      },
    ],
    user: userId,
    createdAt: date,
  };
  return <button onClick={() => postPosts(post)}>보내기!!</button>;
}
