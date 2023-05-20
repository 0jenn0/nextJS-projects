// import { PortableTextBlock } from "sanity";

// export type Post = {
//   _id: string;
//   _createdAt: Date;
//   title: string;
//   slug: string;
//   image: string;
//   //   publishedAt: Date;
//   content: PortableTextBlock[];
// };

import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: string[];
};
