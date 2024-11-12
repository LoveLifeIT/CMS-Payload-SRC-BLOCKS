import type {Block} from 'payload/types'
import {backgroundColorField} from "../../fields/fields";
import link from "../../fields/link";

export const PublicationsModule: Block = {
	slug: 'Publications',
	fields: [
		{
			name: 'publications',
			type: 'array',
			fields: [
				{
					name: 'image',
					type: 'relationship',
					relationTo: 'media',
				},
				link({
					appearances: false,
					disableLabel: true,
				}),
			]
		},
		backgroundColorField
	],
}
