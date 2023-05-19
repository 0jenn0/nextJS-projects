import Profile from "../components/profile";
import FeaturedPosts from "@/components/FeaturedPosts";
import UnFeaturedPosts from "@/components/UnFeaturedPosts";

export default async function Home() {
  return (
    <>
      <Profile />
      <div className="w-11/12 m-auto">
        {/* @ts-expect-error Server Component */}
        <FeaturedPosts />
        {/* @ts-expect-error Server Component */}
        <UnFeaturedPosts />
      </div>
    </>
  );
}
