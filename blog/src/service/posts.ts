import path from "path";
import { promises as fs } from "fs";

export type Post = {
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
};

export async function getPosts(): Promise<Post[]> {
  // process.cwd = 지금 현재 경로
  const filePath = path.join(process.cwd(), "/data", "posts.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

export async function getPost(path: string): Promise<Post | undefined> {
  const posts = await getPosts();
  return posts.find((post) => post.path === path);
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((post) => post.featured === true);
}
