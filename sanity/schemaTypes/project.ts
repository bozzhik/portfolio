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

export default project
