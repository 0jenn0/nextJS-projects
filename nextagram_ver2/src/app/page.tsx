import Profile from "@/components/Profile";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full flex justify-between">
      <section>
        <h1>FollowingBar</h1>
        <h1>PostList</h1>
      </section>
      <Profile />
    </section>
  );
}
