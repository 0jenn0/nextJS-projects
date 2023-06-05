import { SimpleUser } from "./user";

// export type Post = {
//   id: string;
//   author: SimpleUser;
//   comments: [{ comment: string; author: SimpleUser }];
//   likes: string;
//   photo: string;
//   updatedAt: Date;
// };

export type Comment = {
  comment: string;
  username: string;
  image: string;
};

export type FullPost = {
  id: string;
  username: string;
  userImage: string;
  image: string;
  text: string;
  createdAt: string;
  likes: string[];
  comments: Comment[];
};

export type SimplePost = Omit<FullPost, "comments"> & {
  comments: number;
};
