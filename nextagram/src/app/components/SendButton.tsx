"use client";
import { useSession } from "next-auth/react";
import { postPosts } from "../../../sanity/sanity-utils";
import { v4 as uuid } from "uuid";

export default function SendButton({
  text,
  imgUrl,
}: {
  text: string;
  imgUrl: string;
}) {
  const { data } = useSession();
  const user = data?.user;
  const userId = user?.email?.split("@")[0];
  const date = new Date();

  const post = {
    _type: "project",
    _id: uuid(),
    name: `post | ${userId} `,
    text: [
      {
        _type: "block",
        _key: uuid(),
        children: [
          {
            _key: uuid(),
            _type: "span",
            // text: "Content text here",
            text: text,
          },
        ],
        markDefs: [],
      },
    ],
    imageUrl: imgUrl,
    user: userId,
    createdAt: date,
  };
  return <button onClick={() => postPosts(post)}>보내기!!</button>;
}
