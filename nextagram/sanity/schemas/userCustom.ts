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
  ],
});
