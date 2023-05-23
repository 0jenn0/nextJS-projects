//

const project = {
  name: "project",
  title: "Projects",
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
      type: "string",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    },
  ],
};

export default project;
