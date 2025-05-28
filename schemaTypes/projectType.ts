import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'themeColor',
      title: 'Theme color',
      type: 'color',
      options: {
        disableAlpha: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      type: 'thumbnail',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featureMedia',
      title: 'Featured media',
      type: 'featureMedia',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      description: 'External link to the full project',
      type: 'url',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'projectDescription',
      validation: (rule) => rule.required(),
    }),
  ],
})
