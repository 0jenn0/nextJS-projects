import PostCarousel from "@/components/Carousel";
import Profile from "./profile/profile";
import PostCard from "@/components/PostCard";
import {
  getFeaturedPosts,
  getPosts,
  getUnfeaturedPosts,
  Post,
} from "@/service/posts";

export default async function Home() {
  const featuredPosts = await getFeaturedPosts();
  const unfeaturedPosts = await getUnfeaturedPosts();

  return (
    <>
      <Profile />
      <div className="w-11/12 m-auto">
        <section>
          <h3 className="font-semibold text-lg mb-3 mt-4">Featured Posts ✨</h3>
          <div className="grid  gap-11 mb-10 md:grid-cols-3  lg:grid-cols-5 grid-cols-2">
            {featuredPosts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-3">You may like 💕</h3>
          <PostCarousel>
            {unfeaturedPosts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </PostCarousel>
        </section>
      </div>
    </>
  );
}
