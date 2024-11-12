import type { Block } from 'payload/types'

import { background } from '../../fields/background'
import linkGroup from '../../fields/linkGroup'
import richText from '../../fields/richText'

export const CallToAction: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    richText(),
    background
  ],
}
