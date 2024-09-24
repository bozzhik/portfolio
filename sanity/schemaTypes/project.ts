import {Rule, SchemaTypeDefinition} from 'sanity'

const project: SchemaTypeDefinition = {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'link',
      title: 'Project link',
      type: 'string',
    },
    {
      name: 'id',
      title: 'Project ID',
      type: 'number',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
      validation: (rule) => rule.required().max(100),
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
      title: 'Project Image',
      type: 'image',
      validation: (rule: Rule) => rule.required(),
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

export default project
