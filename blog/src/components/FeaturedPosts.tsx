import { getFeaturedPosts } from "@/service/posts";
import PostCard from "./PostCard";

export default async function FeaturedPosts() {
  const featuredPosts = await getFeaturedPosts();
  return (
    <section>
      <h3 className="font-semibold text-lg mb-3 mt-4">Featured Posts ✨</h3>
      <div className="grid  gap-11 mb-10 md:grid-cols-3  lg:grid-cols-5 grid-cols-2">
        {featuredPosts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </section>
  );
}
