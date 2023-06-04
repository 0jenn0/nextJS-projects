import { SimpleUser } from "./user";

export type Post = {
  id: string;
  author: SimpleUser;
  comments: [{ comment: string; author: SimpleUser }];
  likes: string;
  photo: string;
  updatedAt: Date;
};
