// import { getPosts, getPostyByCategory, Post } from "@/service/posts";
// import { createContext, useState, useEffect } from "react";
// // import { Post } from "@/service/posts";
// import { initialPosts } from "@/service/posts";

// interface CategoryContextValue {
//   posts: Post[];
//   handleCategory: (category: Categories) => Promise<void>;
// }

// export const CategoryContext = createContext<CategoryContextValue | null>(null);

// type Categories =
//   | "All Posts"
//   | "my story"
//   | "frontend"
//   | "backend"
//   | "javascirpt";

// export default function CategoryContextProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [posts, setPosts] = useState<Post[]>([]);

//   useEffect(() => {
//     initialPosts;
//   }, []);

//   async function handleCategory(category: Categories) {
//     if (category === "All Posts") {
//       const initialPosts = await getPosts();
//       setPosts(initialPosts);
//     } else {
//       const categoryPosts = await getPostyByCategory(category);
//       setPosts(categoryPosts);
//     }
//   }

//   return (
//     <CategoryContext.Provider value={{ posts, handleCategory }}>
//       {children}
//     </CategoryContext.Provider>
//   );
// }
