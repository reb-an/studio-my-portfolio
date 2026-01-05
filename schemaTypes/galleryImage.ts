import {defineType} from 'sanity'

export const galleryImageType = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'object',
  fields: [
    {
      name: 'aspectRatio',
      description: 'aspect-ratio of the image.',
      title: 'Aspect Ratio',
      type: 'number',
      initialValue: 1,
      validation: (rule) => rule.required(),
    },
    {
      name: 'alt',
      title: 'alt',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (rule) => rule.required(),
    },
  ],
})
