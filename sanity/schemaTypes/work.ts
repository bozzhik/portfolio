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
      validation: (rule: Rule) => rule.required(),
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
      name: 'image',
      title: 'Work Image',
      type: 'image',
    },
    {
      name: 'variant',
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
      name: 'stack',
      title: 'Work Stack',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tech'}}],
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'in_development',
      title: 'In development?',
      type: 'boolean',
    },
    {
      name: 'is_special',
      title: 'Is it special',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'id',
      media: 'image',
    },
  },
}

export default work
