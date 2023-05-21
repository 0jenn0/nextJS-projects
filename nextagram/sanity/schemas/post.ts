import { defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "user",
      title: "User",
      type: "reference",
      to: { type: "user" },
      //   type: "array",
      //   of: [{ type: "reference", to: { type: "user" } }],
    },
  ],
});
