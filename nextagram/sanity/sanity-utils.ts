import { PortableTextBlock } from "sanity";
import { createClient, groq } from "next-sanity";
import { Project } from "../types/Post";
import { headers } from "next/dist/client/components/headers";

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

export async function postPosts() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: false,
    apiVersion: "2023-05-20",
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  });

  const tokenWithWriteAccess = process.env.NEXT_PUBLIC_SANITY_TOKEN;

  //   const projectData: Project = {
  //     _id: "id다",
  //     name: "내가 올리는 포스트",
  //     createdAt: new Date(),
  //     slug: "myslug",
  //     image: "none",
  //     url: "none",
  //     content: "내용이다~~~",
  //   };
  //   await fetch("http://localhost:3000/admin/desk/project", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(projectData, null, 2),
  //   }).then((response) => {
  //     if (response.status == 200) {
  //       console.log("성공적으로 post함");
  //     } else if (response.status == 400) {
  //       console.log("post 실패");
  //     }
  //   });
  //   const mutations = [
  //     {
  //       createOrReplace: {
  //         _id: "123",
  //         _type: "cms.article",
  //         name: "내가 올리는 포스트",
  //         createdAt: new Date(),
  //         slug: "myslug",
  //         image: "none",
  //         url: "none",
  //         content: "내용이다~~~",
  //       },
  //     },
  //   ];

  //   const projectData = {
  //     _id: "my-create-post4",
  //     _createdAt: new Date(),
  //     name: "post-upload",
  //     // image: "none",
  //     // url: "none",
  //     content: ["내용이다~~~"],
  //   };
  const data = {
    _type: "project",
    _id: "lawijeflfffffwijfffea",
    name: "user please send",
    slug: {
      _type: "slug",
      current: "project-name", // slug 값을 설정합니다.
    },
    // image: {
    //   _type: "image",
    //   asset: {
    //     _ref: "image-abc123_0G0Pkg3JLakKCLrF1podAdE9-538x538-jpg", // 이미지에 대한 asset ID를 참조합니다.
    //     _type: "reference",
    //   },
    //   alt: "Image Alt Text",
    // },
    url: "https://example.com",

    content: [
      {
        _type: "block",
        _key: "5a453d78266fb859eea56a7c46e8fdd4f",
        children: [
          {
            _key: "awlkefjawleijfawefa",
            _type: "span",
            text: "Content text here",
          },
        ],
        markDefs: [],
      },
    ],
  };

  const result = client.createIfNotExists(data);
  return result;
}
