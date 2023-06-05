import { FullPost, SimplePost } from "@/model/post";
import { useState } from "react";
import Image from "next/image";
import Avatar from "./Avatar";
import useSWR from "swr";
import ActionBar from "./ActionBar";
import CommentForm from "./CommentForm";
import PostUserAvatar from "./PostUserAvatar";

type Props = {
  post: SimplePost;
};

export default function PostDetailCard({ post }: Props) {
  const { id, userImage, username, image, createdAt, likes } = post;
  const { data } = useSWR<FullPost>(`/api/posts/${id}`);
  const comments = data?.comments;

  return (
    <article className="w-3/4 h-5/6 bg-white flex flex-col md:flex-row m-0 p-0 rounded-lg">
      <Image
        className="h-2/5 md:h-full md:w-3/5 aspect-square  object-cover rounded-tl-lg rounded-bl-lg"
        src={post.image}
        alt="photo"
        width={800}
        height={800}
        priority
      />
      <section className="h-3/5  w-full md:w-2/5 flex flex-col">
        <PostUserAvatar userImage={userImage} username={username} />
        <ul className="p-2 flex flex-col gap-2 grow overflow-y-auto">
          {comments?.slice(1).map((comment, index) => (
            <li className="flex items-center gap-2" key={index}>
              <Avatar
                image={comment.image}
                size="small"
                highlight={comment.username === post.username}
              />
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
