import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {colorInput} from '@sanity/color-input'
import { codeInput } from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'my-portfolio',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '',
  dataset: process.env.SANITY_STUDIO_DATASET_MODE ?? '',

  plugins: [structureTool(), visionTool(), colorInput(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
