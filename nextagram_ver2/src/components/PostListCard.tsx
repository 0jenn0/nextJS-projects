"use client";

import { SimplePost } from "@/model/post";
import Avatar from "./Avatar";
import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";
import Image from "next/image";
import { useState } from "react";
import ModalPortal from "./ui/ModalPortal";
import PostDetailCard from "./PostDetailCard";
import PostModal from "./PostModal";
import PostUserAvatar from "./PostUserAvatar";

type Props = {
  post: SimplePost;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section className=" shadow-lg shadow-neutral-100  w-full border border-neutral-200 rounded-2xl">
        <PostUserAvatar userImage={post.userImage} username={post.username} />
        <Image
          className="w-full aspect-square  object-cover"
          src={post.image}
          alt="photo"
          width={800}
          height={800}
          priority={priority}
          onClick={() => setShowModal(true)}
        />
        <ActionBar post={post} />
        <CommentForm />
        {showModal && (
          <ModalPortal>
            <PostModal onClose={() => setShowModal(false)}>
              <PostDetailCard post={post} />
            </PostModal>
          </ModalPortal>
        )}
      </section>
    </>
  );
}
