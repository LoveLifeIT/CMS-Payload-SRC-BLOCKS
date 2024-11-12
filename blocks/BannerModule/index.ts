import type {Block} from 'payload/types'
import { actionButtonsField, backgroundColorField, textColorField } from "../../fields/fields";

export const BannerModule: Block = {
	slug: 'Banner',
	fields: [
		{
			name: 'copy',
			label: 'Copy',
			type: 'textarea',
		},
		actionButtonsField,
		{
			type: 'row',
			fields: [
				textColorField,
				backgroundColorField,
			]
		}
	],
}
