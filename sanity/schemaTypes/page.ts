export const pageType = {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'section' },
        { type: 'cta' },
        {
          name: 'testimonials',
          type: 'object',
          fields: [
            { name: 'heading', type: 'string' },
            { name: 'testimonialItems', type: 'array', of: [{ type: 'reference', to: [{ type: 'testimonial' }] }] }
          ]
        },
      ],
    },
  ],
};
