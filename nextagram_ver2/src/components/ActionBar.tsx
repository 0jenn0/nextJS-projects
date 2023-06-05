import { SimplePost } from "@/model/post";
import BookmarkIcon from "./ui/icons/BookmarkIcon";
import LikesIcon from "./ui/icons/LikesIcon";
import { parseDate } from "@/util/parseDate";

type Props = {
  post: SimplePost;
};
export default function ActionBar({ post }: Props) {
  return (
    <>
      <div className="p-3 flex justify-between text-xl">
        <button>
          <LikesIcon />
        </button>
        <button>
          <BookmarkIcon />
        </button>
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
