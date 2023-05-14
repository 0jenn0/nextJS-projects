import PostCarousel from "@/components/Carousel";
import Profile from "./profile/profile";
import PostCard from "@/components/PostCard";
import {
  getFeaturedPosts,
  getPosts,
  getUnfeaturedPosts,
  Post,
} from "@/service/posts";

type Props = {
  post: Post;
};

export default async function Home({ post }: Props) {
  const featuredPosts = await getFeaturedPosts();
  const unfeaturedPosts = await getUnfeaturedPosts();

  return (
    <body className="w-11/12 m-auto">
      <Profile />
      <section>
        <h3 className="font-semibold text-lg mb-3">Featured Posts</h3>
        <div className="grid grid-cols-3 gap-11 mb-10">
          {featuredPosts.map(
            ({ path, date, title, description, category }, index) => (
              <PostCard
                key={index}
                path={path}
                date={date}
                title={title}
                description={description}
                category={category}
                featured
              />
            )
          )}
        </div>
      </section>

      <section>
        <h3 className="font-semibold text-lg mb-3">You may like</h3>
        <PostCarousel>
          {unfeaturedPosts.map(
            ({ path, date, title, description, category }, index) => (
              <PostCard
                key={index}
                path={path}
                date={date}
                title={title}
                description={description}
                category={category}
                featured
              />
            )
          )}
        </PostCarousel>
      </section>
    </body>
  );
}
