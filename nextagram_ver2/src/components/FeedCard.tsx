"use client";

import { useState } from "react";
import ModalPortal from "./ui/ModalPortal";
import PostModal from "./PostModal";
import PostDetailCard from "./PostDetailCard";
import { SimplePost } from "@/model/post";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {
  post: SimplePost;
};

export default function FeedCard({ post }: Props) {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (session) setShowModal(true);

    router.push("/auth/signin");
  };

  return (
    <div>
      <img
        src={post.image}
        className="w-[300px] aspect-square hover:cursor-pointer"
        key={post.id}
        onClick={() => handleClick()}
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
