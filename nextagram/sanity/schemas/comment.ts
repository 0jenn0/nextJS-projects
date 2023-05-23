import { defineField, defineType } from "sanity";
import userCustom from "./userCustom";

export default defineType({
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    defineField({
      name: "userCustom",
      title: "UserCustom",
      type: "reference",
      to: { type: "userCustom" },
    }),
    defineField({
      name: "commentText",
      title: "Comment Text",
      type: "string",
    }),
  ],
});
