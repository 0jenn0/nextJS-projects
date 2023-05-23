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

export type Post = {
  _id: string;
  _createdAt: Date;
  name: string;
  imageUrl: string;
  text: any;
  user: string;
  createdAt: Date;
};
