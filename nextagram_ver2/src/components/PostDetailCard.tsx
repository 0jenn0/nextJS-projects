import { FullPost, SimplePost } from "@/model/post";
import { useState } from "react";
import Image from "next/image";
import Avatar from "./Avatar";
import useSWR from "swr";
import ActionBar from "./ActionBar";
import CommentForm from "./CommentForm";

type Props = {
  post: SimplePost;
};

export default function PostDetailCard({ post }: Props) {
  const { id, userImage, username, image, createdAt, likes } = post;
  const { data } = useSWR<FullPost>(`/api/posts/${id}`);
  const comments = data?.comments;
  console.log("comments : ", comments);

  return (
    <article className="w-3/4 bg-white flex flex-col md:flex-row m-0 p-0 rounded-lg">
      <Image
        className="w-3/5 aspect-square  object-cover rounded-tl-lg rounded-bl-lg"
        src={post.image}
        alt="photo"
        width={800}
        height={800}
      />
      <section className="w-2/5 flex flex-col">
        <div className="w-100 flex gap-3 items-center p-2 border-b border-neutral-200">
          <Avatar image={userImage} size="medium" />
          <p className="font-semibold">{username}</p>
        </div>
        <ul className="p-2 flex flex-col gap-2 grow">
          {comments?.slice(1).map((comment) => (
            <li className="flex items-center gap-2">
              <Avatar image={comment.image} size="small" />
              <p className="font-semibold">{comment.username}</p>
              <p className="text-sm">{comment.comment}</p>
            </li>
          ))}
        </ul>
        <ActionBar post={post} />
        <CommentForm />
      </section>
    </article>
  );
}
