import Image from "next/image";
import GoogleButton from "./components/GoogleButton";
import { getPosts, postPosts } from "../../sanity/sanity-utils";
import { Project } from "../../types/Post";
import SendButton from "./components/SendButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import SignButton from "./components/SignButton";
import Hero from "./components/Hero";

export default async function Home() {
  // const posts = await getPosts();
  // const send = await postPosts();

  const session = await getServerSession(authOptions);
  // return (
  //   <>
  //     <h1>HOME</h1>
  //     {posts.map((post: Project) => (
  //       <div key={post.name}>
  //         <p>{post.name}</p>
  //         {/* <span>{`${post.content}`}</span> */}
  //       </div>
  //     ))}
  //     {
  //       session?.user?.email
  //     }
  //     <SendButton />
  //   </>
  // );
  if (!session) {
    return (
      <section className="w-full h-full flex justify-center items-start pt-44">
        <SignButton />
      </section>
    );
  }

  return (
    <section className="w-full flex justify-center pt-5">
      <Hero />
    </section>
  );
}
