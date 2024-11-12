import type { Block, Field } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'
import link from '../../fields/link'
import richText from '../../fields/richText'

const columnFields: Field[] = [
  {
    name: 'type',
    type: 'select',
    defaultValue: 'full',
    options: [
      {
        value: 'full',
        label: 'Full',
      },
    ],
  },
  richText()
]

export const Content: Block = {
  slug: 'content',
  fields: [
    {
      name: 'rows',
      label: 'Sections',
      type: 'array',
      fields: columnFields,
    },
  ],
}
