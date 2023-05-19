import PostCarousel from "./Carousel";
import PostCard from "./PostCard";
import { getUnfeaturedPosts } from "@/service/posts";

export default async function UnFeaturedPosts() {
  const unfeaturedPosts = await getUnfeaturedPosts();
  return (
    <section>
      <h3 className="font-semibold text-lg mb-3">You may like 💕</h3>
      <PostCarousel>
        {unfeaturedPosts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </PostCarousel>
    </section>
  );
}
