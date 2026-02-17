export const sectionType = {
  name: 'section',
  title: 'Standard Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
    },
    {
      name: 'richText',
      title: 'Rich Text Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'featureCards',
      title: 'Feature Cards / Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'description', type: 'text' },
            { name: 'icon', type: 'string', description: 'Lucide icon name (e.g., ShieldCheck, Zap, Activity)' },
            { name: 'price', type: 'string' },
            { name: 'buttonLabel', type: 'string' },
            { name: 'buttonLink', type: 'string' },
            { name: 'listItems', type: 'array', of: [{ type: 'string' }] },
          ],
        },
      ],
    },
    {
        name: 'layout',
        title: 'Layout Type',
        type: 'string',
        options: {
            list: [
              { title: 'Grid', value: 'grid' },
              { title: 'About Teaser', value: 'about-teaser' },
              { title: 'Contact Form', value: 'contact-form' },
              { title: 'Pricing Grid', value: 'pricing-grid' },
              { title: 'Content Only', value: 'content' },
              { title: 'Shop Protocols', value: 'shop-protocols' }
            ]
        }
    },
    {
        name: 'image',
        title: 'Section Image',
        type: 'image'
    }
  ],
};
