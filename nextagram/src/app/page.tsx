import Image from "next/image";
import GoogleButton from "./components/GoogleButton";
import { getPosts, postPosts } from "../../sanity/sanity-utils";

import SendButton from "./components/SendButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import SignButton from "./components/SignButton";
import Hero from "./components/Hero";

export default function Home() {
  // const posts = await getPosts();
  // const send = await postPosts();

  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   return (
  //     <section className="w-full h-full flex justify-center items-start pt-44">
  //       <SignButton />
  //     </section>
  //   );
  // }

  return (
    <section className="w-full flex justify-center pt-5">
      <Hero />
      {/* <h1>Home</h1> */}
    </section>
  );
}
