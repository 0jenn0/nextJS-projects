import { defineType, defineField } from "sanity";
// import { useSession } from "next-auth/react";

// const { data } = useSession();
// const user = data!.user!;
// const { email, image, name } = user;

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    // {
    //   name: "user",
    //   title: "User",
    //   type: "reference",
    //   to: { type: "user" },
    //   //   type: "array",
    //   //   of: [{ type: "reference", to: { type: "user" } }],
    // },
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    // defineField({
    //     name: 'user',
    //     title: 'User',
    //     type: 'reference',
    // })
  ],
});

/**
 *
 */
