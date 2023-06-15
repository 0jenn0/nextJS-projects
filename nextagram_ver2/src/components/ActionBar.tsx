import { SimplePost } from "@/model/post";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import LikesIcon from "./ui/icons/LikesIcon";
import { parseDate } from "@/util/parseDate";
import { useState } from "react";
import ToggleButton from "./ui/ToggleButton";
import LikesFillIcon from "./ui/icons/LikesFillIcon";
import BookmarkFillIcon from "./ui/icons/BookmarkFillIcon";
import { useSession } from "next-auth/react";
import { useSWRConfig } from "swr";

type Props = {
  post: SimplePost;
};

export default function ActionBar({ post }: Props) {
  const { data: session } = useSession();
  const id = post.id;
  const user = session?.user;
  // const [liked, setLiked] = useState(
  //   user ? post.likes.includes(user.username) : false
  // );
  const liked = user ? post.likes.includes(user.username) : false;
  const [bookmarked, setBookmarked] = useState(false);
  const { mutate } = useSWRConfig();

  const handleClick = (like: boolean) => {
    fetch("api/likes", {
      method: "PUT",
      body: JSON.stringify({ id, like }),
    }).then(() => mutate("/api/posts"));
  };

  return (
    <>
      <div className="p-3 flex justify-between text-xl">
        <ToggleButton
          toggled={liked}
          onToggle={handleClick}
          onIcon={<LikesFillIcon />}
          offIcon={<LikesIcon />}
        />
        <ToggleButton
          toggled={bookmarked}
          onToggle={setBookmarked}
          onIcon={<BookmarkFillIcon />}
          offIcon={<BookmarkIcon />}
        />
      </div>
      <div>
        <p className="font-semibold text-sm px-3">
          {post.likes ? post.likes.length : 0}
          {post.likes && post.likes.length >= 2 ? " likes" : " like"}
        </p>
      </div>
      <div className="flex gap-2 px-3 pt-3 pb-1">
        <p className="font-semibold">{post.username}</p>
        <p className="font-[2]">{post.text}</p>
      </div>
      <p className="px-3 text-sm text-neutral-500 pb-3">
        {parseDate(post.createdAt)}
      </p>
    </>
  );
}
