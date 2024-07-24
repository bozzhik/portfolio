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

export default project
