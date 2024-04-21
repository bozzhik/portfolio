import {Rule, SchemaTypeDefinition} from 'sanity'

const tech: SchemaTypeDefinition = {
  name: 'tech',
  title: 'Tech',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Tech Name',
    },
    {
      name: 'value',
      type: 'string',
      title: 'Tech Name',
      validation: (rule: Rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'value',
    },
  },
}

export default tech
