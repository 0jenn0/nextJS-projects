"use client";

import { useState } from "react";
import ModalPortal from "./ui/ModalPortal";
import PostModal from "./PostModal";
import PostDetailCard from "./PostDetailCard";
import { SimplePost } from "@/model/post";

type Props = {
  post: SimplePost;
};

export default function FeedCard({ post }: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <img
        src={post.image}
        className="w-[300px] aspect-square"
        key={post.id}
        onClick={() => setShowModal(true)}
      />
      {showModal && (
        <ModalPortal>
          <PostModal onClose={() => setShowModal(false)}>
            <PostDetailCard post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </div>
  );
}
