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
      name: 'thumbnail',
      type: 'thumbnail',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'video',
      type: 'file',
    }),
    defineField({
      name: 'carousel',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project URL',
      description: 'External link to the full project',
      type: 'url',
    }),
    defineField({
      name: 'sourceCodeUrl',
      title: 'Source Code URL',
      description: 'External link to the source code of the project',
      type: 'url',
    }),
    defineField({
      name: 'summary',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'roles',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'features',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tools',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [{type: 'galleryImage'}],
    }),
  ],
})
