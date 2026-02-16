export const heroType = {
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    },
    {
      name: 'bgImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ctaButtons',
      title: 'CTA Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string' },
            { name: 'link', type: 'string' },
            { name: 'variant', type: 'string', options: { list: ['primary', 'secondary', 'outline'] } },
          ],
        },
      ],
    },
  ],
};
