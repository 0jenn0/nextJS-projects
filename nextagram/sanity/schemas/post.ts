//

const project = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "imageUrl",
      title: "Image Url",
      type: "string",
      // options: { hotspot: true },
      // // fields: [
      // //   {
      // //     name: "alt",
      // //     title: "Alt",
      // //     type: "string",
      // //   },
      // // ],
    },

    {
      name: "text",
      title: "Text",
      type: "array",
      of: [{ type: "block" }],
    },

    {
      name: "user",
      title: "User",
      type: "reference",
      to: { type: "userCustom" },
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    },
    {
      name: "liked",
      title: "Liked",
      type: "number",
    },
    {
      name: "comments",
      title: "Comments",
      type: "array",
      of: [{ type: "reference", to: [{ type: "comment" }] }],
    },
  ],
};

export default project;
