import type {Block} from 'payload/types'

import {colors} from '../../lib/consts';
import {backgroundColorField} from "../../fields/fields";

export const HeroModule: Block = {
	slug: 'Hero Module',
	fields: [
		{
			name: 'heroCopy',
			type: 'textarea',
			label: 'Hero Copy',
		},
		{
			name: 'backgroundImage',
			label: "Background Media",
			type: 'upload',
			relationTo: 'media',
			required: false,
		},
		{
			name: "heroCopyColor",
			type: "select",
			options: colors,
			required: false,
			defaultValue: 'white'
		},
		{
			name: "innerPage",
			type: "checkbox",
			required: false,
			defaultValue: true
		},
		backgroundColorField,
	],
}
