import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    defineField({
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'user'}],
    }),
    defineField({
      title: 'Photo',
      name: 'photo',
      type: 'image',
    }),
    defineField({
      title: 'Likes',
      name: 'likes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'user'}]}],
      validation: (Rule) => Rule.unique(),
    }),
    defineField({
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        {
          title: 'Comment',
          name: 'comment',
          type: 'document',
          fields: [
            defineField({
              title: 'Author',
              name: 'author',
              type: 'reference',
              to: [{type: 'user'}],
            }),
            defineField({
              title: 'Comment',
              name: 'comment',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'comments.0.comment',
      authorName: 'author.name',
      authorUsername: 'author.username',
      media: 'photo',
    },
    prepare(selection) {
      const {title, authorName, authorUsername, media} = selection
      return {
        title,
        subtitle: `by ${authorName} (${authorUsername})`,
        media,
      }
    },
  },
})
