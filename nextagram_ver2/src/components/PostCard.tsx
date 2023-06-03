import { Post } from "@/model/post";
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

const builder = imageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
});

function urlFor(source: string) {
  return builder.image(source);
}

export default function PostCard({ post }: { post: Post }) {
  console.log(post.photo);
  console.log(urlFor(post.photo).width(720).url());

  return (
    <section className="shadow-lg shadow-neutral-100  w-3/4 border border-neutral-200 rounded-2xl">
      <div className="flex gap-2 items-center p-3">
        <Avatar image={post.author.image} />
        <p className="font-semibold">{post.author.username}</p>
      </div>
      <img
        className="w-full aspect-square  object-cover"
        src={urlFor(post.photo).width(400).crop("center").url()}
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
      <div className="flex gap-2 p-3">
        <p className="font-semibold">{post.author.username}</p>
        <p className="font-[2]">{post.comments[0].comment}</p>
      </div>
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
