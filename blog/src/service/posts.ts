import path from "path";
import { promises as fs } from "fs";
// if (typeof window === "undefined") {
//   const fs = require("fs");
//   // 서버에서만 실행되는 코드
// }

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

export async function initialPosts(): Promise<Post[]> {
  return await getPosts();
}

export async function getPost(path: string): Promise<Post | undefined> {
  const posts = await getPosts();
  const initialPosts = await getPosts();
  return posts.find((post) => post.path === path);
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((post) => post.featured === true);
}

export async function getUnfeaturedPosts(): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((post) => post.featured === false);
}

export async function getPostyByCategory(category: string): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((post) => post.category === category);
}

export async function getIndexOfPost(path: string): Promise<number> {
  const posts = await getPosts();
  return posts.findIndex((post) => post.path === path);
}

export async function getPostByIndex(index: number): Promise<Post> {
  const posts = await getPosts();
  return posts[index];
}
