import { Post } from "@/model/post";
import Avatar from "./Avatar";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/service/sanity";

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
    <section>
      <div className="flex gap-2 items-center">
        <Avatar image={post.author.image} highlight={false} />
        <p>{post.author.username}</p>
      </div>
      <img src={urlFor(post.photo).url()} alt="photo" />

      <p>{post.comments[0].comment}</p>
    </section>
  );
}
