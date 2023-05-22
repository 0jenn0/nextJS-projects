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
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      // fields: [
      //   {
      //     name: "alt",
      //     title: "Alt",
      //     type: "string",
      //   },
      // ],
    },

    {
      name: "content",
      title: "Content",
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
