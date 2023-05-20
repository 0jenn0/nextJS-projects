import Image from "next/image";
import GoogleButton from "./components/GoogleButton";
import { getPosts, postPosts } from "../../sanity/sanity-utils";
import { Project } from "../../types/Post";
import SendButton from "./components/SendButton";

export default async function Home() {
  const posts = await getPosts();
  // const send = await postPosts();
  return (
    <>
      <h1>HOME</h1>
      {posts.map((post: Project) => (
        <div key={post.name}>
          <p>{post.name}</p>
          {/* <span>{`${post.content}`}</span> */}
        </div>
      ))}
      <SendButton />
    </>
  );
}
