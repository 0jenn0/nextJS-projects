import { SimplePost } from "@/model/post";
import Avatar from "./Avatar";
import { VscSmiley } from "react-icons/vsc";
import { parseDate } from "@/util/parseDate";
import LikesIcon from "./ui/icons/LikesIcon";
import BookmarkIcon from "./ui/icons/BookmarkIcon";

type Props = {
  post: SimplePost;
};

export default function PostListCard({ post }: Props) {
  return (
    <section className=" shadow-lg shadow-neutral-100  w-3/4 border border-neutral-200 rounded-2xl">
      <div className="flex gap-2 items-center p-3">
        <Avatar image={post.userImage} size="medium" />
        <p className="font-semibold">{post.username}</p>
      </div>
      <img
        className="w-full aspect-square  object-cover"
        src={post.image}
        alt="photo"
      />
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
      <form
        action="submit"
        className="w-full flex items-center border-t border-neutral-200"
      >
        <VscSmiley className="w-[3rem] aspect-square text-2xl" />
        <input
          type="text"
          placeholder="Add a comment ... "
          className="grow px-3 py-2 text-sm"
        />
        <button className="font-semibold px-2 text-blue-500">Post</button>
      </form>
    </section>
  );
}
