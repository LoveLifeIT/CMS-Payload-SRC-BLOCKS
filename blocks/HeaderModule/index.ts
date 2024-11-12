import type { Block } from 'payload/types'
import { colors } from '../../lib/consts';

export const HeaderModule: Block = {
	slug: 'Header Module',
	fields: [
		{
			name: 'heroCopy',
			type: 'textarea',
			label: 'Hero Copy',
		},
		{
			name: "heroCopyColor",
			type: "select",
			options: colors,
			defaultValue: "white",
			required: true,
		},
		{
			name: "backgroundColor",
			type: "select",
			options: colors,
			defaultValue: "darkGreen",
			required: true,
		}
	],
}
