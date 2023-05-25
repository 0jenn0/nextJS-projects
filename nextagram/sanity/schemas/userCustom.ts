import { defineField, defineType } from "sanity";

export default defineType({
  name: "userCustom",
  title: "UserCustom",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "id",
      title: "Id",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "url",
    },
    {
      name: "posts",
      title: "Posts",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }],
    },
    // {
    //   name: "following",
    //   title: "Following",
    //   type: "string",
    // },
    {
      name: "following",
      title: "Following",
      type: "array",
      of: [{ type: "reference", to: [{ type: "userCustom" }] }],
    },
    {
      name: "liked",
      title: "Liked",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }],
    },
    {
      name: "bookmark",
      title: "Bookmark",
      type: "array",
      of: [{ type: "reference", to: [{ type: "post" }] }],
    },
  ],
});
