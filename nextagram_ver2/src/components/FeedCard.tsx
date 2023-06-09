"use client";

import { useState } from "react";
import ModalPortal from "./ui/ModalPortal";
import PostModal from "./PostModal";
import PostDetailCard from "./PostDetailCard";
import { SimplePost } from "@/model/post";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Props = {
  post: SimplePost;
  priority: boolean;
};

export default function FeedCard({ post, priority }: Props) {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  console.log(post);
  const handleClick = () => {
    if (session) setShowModal(true);

    router.push("/auth/signin");
  };

  return (
    <div className="relative aspect-square w-full">
      <Image
        src={post.image}
        className="object-cover"
        sizes="650px"
        fill
        alt={`photo by ${post.username}`}
        key={post.id}
        onClick={() => handleClick()}
        priority={priority}
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
