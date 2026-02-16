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
      name: 'featureCards',
      title: 'Feature Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'description', type: 'text' },
            { name: 'icon', type: 'string', description: 'Lucide icon name (e.g., ShieldCheck, Zap, Activity)' },
          ],
        },
      ],
    },
    {
        name: 'layout',
        title: 'Layout Type',
        type: 'string',
        options: {
            list: ['grid', 'about-teaser']
        }
    },
    {
        name: 'image',
        title: 'Section Image (for about-teaser)',
        type: 'image'
    }
  ],
};
