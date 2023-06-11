import { SimplePost } from "@/model/post";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import LikesIcon from "./ui/icons/LikesIcon";
import { parseDate } from "@/util/parseDate";
import { useState } from "react";
import ToggleButton from "./ui/ToggleButton";
import LikesFillIcon from "./ui/icons/LikesFillIcon";
import BookmarkFillIcon from "./ui/icons/BookmarkFillIcon";

type Props = {
  post: SimplePost;
};

const handleClick = () => {
  return;
};

export default function ActionBar({ post }: Props) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <>
      <div className="p-3 flex justify-between text-xl">
        <ToggleButton
          toggled={liked}
          onToggle={setLiked}
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
