import type {Block} from 'payload/types'

import {backgroundColorField} from "../../fields/fields";

export const WidgetModule: Block = {
	slug: 'Widget Module',
	fields: [
		{
			name: 'widget',
			type: 'textarea',
			label: 'Widget (HTML ok)',
		},
		backgroundColorField,
	],
}
