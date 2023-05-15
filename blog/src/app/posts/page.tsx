import { getPosts } from "@/service/posts";
import Filterable from "@/components/Filterable";

export default async function CategoryPage() {
  const allPosts = await getPosts();

  return <Filterable posts={allPosts} />;
}
