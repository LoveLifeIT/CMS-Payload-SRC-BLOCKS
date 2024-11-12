import type {Block} from 'payload/types'

export const FaqModule: Block = {
	slug: 'Faq Module',
	fields: [
	    {
	      name: 'leftNav',
	      type: 'relationship',
	      relationTo: ['leftnavs'],
	      hasMany: false,
	      required: true,
	    },
	    {
	      name: 'faqHeading',
	      type: 'text',
	      label: 'FAQ Heading',
	    },
	    {
	      name: 'faqTag',
	      type: 'relationship',
	      relationTo: ['tags'],
	      hasMany: false,
	      required: true,
	      admin: {
	      	allowCreate:false,
	      }
	    },
	],
}
