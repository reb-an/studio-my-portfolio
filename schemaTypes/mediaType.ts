import {defineType} from 'sanity'

export const featureMediaType = defineType({
  name: 'featureMedia',
  title: 'Feature Media',
  type: 'object',
  fields: [
    {
      name: 'aspectRatio',
      description: 'aspect-ratio to size the media. Tailwind based. Ex: 2/3, video, square, etc.',
      title: 'Aspect Ratio',
      type: 'string',
      initialValue: '2/3',
    },
    {
      title: 'Media Type',
      name: 'mediaType',
      type: 'string',
      initialValue: 'image',
      validation: (rule) => rule.required(),
      options: {
        list: [
          {value: 'embed', title: 'Embed'},
          {value: 'image', title: 'Image'},
          {value: 'video', title: 'Video'},
        ],
      },
    },
    {
      name: 'embed',
      title: 'Embed',
      type: 'code',
      hidden: ({parent}) => parent?.mediaType != 'embed',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      hidden: ({parent}) => parent?.mediaType != 'image',
    },
    {
      name: 'video',
      title: 'video',
      type: 'file',
      hidden: ({parent}) => parent?.mediaType != 'video',
    },
  ],
})
