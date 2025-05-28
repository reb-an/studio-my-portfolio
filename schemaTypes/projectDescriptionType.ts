import {defineType} from 'sanity'

export const projectDescriptionType = defineType({
  name: 'projectDescription',
  title: 'Project Description',
  type: 'array',
  of: [{type: 'image'}, {type: 'block'}, {type: 'code'}],
})
