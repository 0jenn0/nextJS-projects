import { PortableTextBlock } from "sanity";
import { createClient, groq } from "next-sanity";
import { Project } from "../types/Post";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function getPosts(): Promise<Project[]> {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: "2023-05-20",
  });

  return client.fetch(
    groq`*[_type == "project" ]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`
  );
}
import { Author } from "@/app/components/GoogleButton";

export async function postAuthor({ name, imageUrl }: Author) {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: false,
    apiVersion: "2023-05-20",
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  });

  const data = {
    _type: "author",
    name: name,
    imageUrl: imageUrl,
  };

  const result = client.create(data);
  return result;
}

export async function postPosts(data: any) {
  //   const session = await getServerSession(authOptions);
  //   const userEmail = session!.user!.email;

  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: false,
    apiVersion: "2023-05-20",
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  });

  const tokenWithWriteAccess = process.env.NEXT_PUBLIC_SANITY_TOKEN;
  //   const data = {
  //     _type: "project",
  //     _id: "lawijeflfffffwijfffea",
  //     name: "user please send",
  //     slug: {
  //       _type: "slug",
  //       current: "project-name", // slug 값을 설정합니다.
  //     },
  //     url: "https://example.com",

  //     content: [
  //       {
  //         _type: "block",
  //         _key: "5a453d78266fb859eea56a7c46e8fdd4f",
  //         children: [
  //           {
  //             _key: "awlkefjawleijfawefa",
  //             _type: "span",
  //             text: "Content text here",
  //           },
  //         ],
  //         markDefs: [],
  //       },
  //     ],
  //     user: { userEmail },
  //   };

  const result = client.create(data);
  return result;
}
