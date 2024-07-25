import {Rule, SchemaTypeDefinition} from 'sanity'

const work: SchemaTypeDefinition = {
  name: 'work',
  title: 'Works',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Work Name',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'link',
      title: 'Work link',
      type: 'string',
    },
    {
      name: 'id',
      title: 'Work ID',
      type: 'number',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Work Description',
      type: 'text',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'type',
      title: 'Work Type',
      type: 'string',
      options: {
        list: [
          {title: 'Landing page', value: 'landing'},
          {title: 'Multi-page website', value: 'multipage'},
        ],
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'image',
      title: 'Work Image',
      type: 'image',
    },
    {
      name: 'color',
      title: 'Hover color',
      type: 'color',
    },
    {
      name: 'is_best',
      title: 'Best work?',
      type: 'boolean',
    },
    {
      name: 'in_development',
      title: 'In development?',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'id',
      best: 'is_best',
      media: 'image',
    },
    prepare(selection) {
      const {title, subtitle, best, media} = selection
      return {
        title: title,
        subtitle: `${subtitle} ${best ? '★' : ''}`,
        media: media,
      }
    },
  },
}

export default work
