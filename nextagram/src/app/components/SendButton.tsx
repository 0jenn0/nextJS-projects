"use client";
import { postPosts } from "../../../sanity/sanity-utils";

export default function SendButton() {
  return <button onClick={async () => postPosts()}>보내기!!</button>;
}
