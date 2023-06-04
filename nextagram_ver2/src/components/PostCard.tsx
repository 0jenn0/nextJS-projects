import { SimplePost } from "@/model/post";
import Avatar from "./Avatar";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/service/sanity";
import {
  BsHeart,
  BsHeartFill,
  BsBookmark,
  BsBookmarkFill,
} from "react-icons/bs";
import { VscSmiley } from "react-icons/vsc";
import { format, render, cancel, register } from "timeago.js";

const builder = imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
});

function urlFor(source: string) {
  return builder.image(source);
}

type Props = {
  post: SimplePost;
};

export default function PostCard({ post }: Props) {
  return (
    <section className=" shadow-lg shadow-neutral-100  w-3/4 border border-neutral-200 rounded-2xl">
      <div className="flex gap-2 items-center p-3">
        <Avatar image={post.userImage} />
        <p className="font-semibold">{post.username}</p>
      </div>
      <img
        className="w-full aspect-square  object-cover"
        src={urlFor(post.image).width(400).crop("center").url()}
        alt="photo"
      />
      <div className="p-3 flex justify-between text-xl">
        <button>
          <BsHeart />
        </button>
        <button>
          <BsBookmark />
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
        {format(post.createdAt)}
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
