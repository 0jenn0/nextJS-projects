import Sidebar from "@/components/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import FollowingBar from "@/components/FollowingBar";
import PostList from "@/components/PostList";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <section className="w-full flex flex-col md:flex-row justify-between max-w-[850px] p-4 mx-auto">
      <div className="w-full basis-2/3 min-w-0">
        <FollowingBar />
        <PostList />
      </div>
      <div className="basis-1/3 ml-8">
        <Sidebar user={user} />
      </div>
    </section>
  );
}
