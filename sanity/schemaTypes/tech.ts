import {Rule, SchemaTypeDefinition} from 'sanity'

const tech: SchemaTypeDefinition = {
  name: 'tech',
  title: 'Tech',
  type: 'document',
  fields: [
    {
      name: 'value',
      type: 'string',
      title: 'Tech Name',
      validation: (rule: Rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'value',
    },
  },
}

export default tech
