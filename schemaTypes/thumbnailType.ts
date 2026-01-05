import {defineField, defineType} from 'sanity'

export const thumbnailType = defineType({
  name: 'thumbnail',
  title: 'Thumbnail',
  type: 'object',
  fields: [
    defineField({
      name: 'blendMode',
      title: 'Blend Mode',
      description: 'CSS blend modes',
      type: 'string',
    }),
    defineField({
      name: 'filter',
      title: 'Filter',
      description: 'CSS filters: https://developer.mozilla.org/en-US/docs/Web/CSS/filter',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
  ],
})
