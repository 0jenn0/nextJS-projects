import { defineField, defineType } from "sanity";

// https://github.com/codewithkristian/sanity-blog-schema/tree/master/schemas
// author : avatar,username,bio,folowers,following,posts,saved,liked
// post : img,liked(+number),saved,댓글(author(avatar,username)),author(avatar,username),timeago

export default defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "imageUrl",
      title: "Image Url",
      type: "string",
      // options: {
      //   hotspot: true,
      // },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "string",
      // of: [
      //   {
      //     title: "Block",
      //     type: "block",
      //     styles: [{ title: "Normal", value: "normal" }],
      //     lists: [],
      //   },
      // ],
    }),
    // defineField({
    //   name: 'following',
    //   title: "Following",
    //   type: "reference",
    // })
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
