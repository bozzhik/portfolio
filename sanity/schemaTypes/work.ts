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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
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
      title: 'Best work',
      type: 'boolean',
    },
    {
      name: 'in_development',
      title: 'In development',
      type: 'boolean',
    },
    {
      name: 'is_draft',
      title: 'Draft',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'id',
      media: 'image',
      best: 'is_best',
      draft: 'is_draft',
    },
    prepare(selection) {
      const {title, subtitle, media, best, draft} = selection
      return {
        title: title,
        media: media,
        subtitle: `${subtitle} ${best ? '★' : ''} ${draft ? '[hidden]' : ''}`,
      }
    },
  },
}

export default work
