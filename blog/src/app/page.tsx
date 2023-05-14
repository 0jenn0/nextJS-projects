import Profile from "./profile/profile";
import PostCard from "@/components/PostCard";
import { getFeaturedPosts, getPosts, Post } from "@/service/posts";
import path from "path";

type Props = {
  post: Post;
};

export default async function Home({ post }: Props) {
  const featuredPosts = await getFeaturedPosts();
  return (
    <>
      <Profile />
      <section className="w-11/12 m-auto">
        <h3 className="font-semibold text-lg mb-3">Featured Posts</h3>
        <div className="grid grid-cols-3 gap-11 m-auto">
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
        <h3>You may like</h3>
      </section>
    </>
  );
}
