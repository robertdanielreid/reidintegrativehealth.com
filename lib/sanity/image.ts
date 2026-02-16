import { createImageUrlBuilder } from '@sanity/image-url'
import { client } from './client'

const builder = createImageUrlBuilder(client || {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 't9xq5v6c',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
})

export function urlFor(source: any) {
  return builder.image(source)
}
