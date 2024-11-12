import type {Block, Field} from 'payload/types'
import {HTMLConverterFeature, lexicalEditor, lexicalHTML} from "@payloadcms/richtext-lexical";
import {
	actionButtonsField, alignmentField, backgroundColorField, backgroundMediaField, fullWidthField, mediaField,
	moduleHeightField, textColorField
} from "../../fields/fields";
import {filterSupportedFeatures} from "../../lib/utils";

let columnFields: Field[] = [
	{
		name: 'copy',
		label: 'Copy',
		type: 'richText',
		editor: lexicalEditor({
			features: ({defaultFeatures}) => [...filterSupportedFeatures(defaultFeatures), HTMLConverterFeature({})]
		})
	},
	lexicalHTML('copy', {name: 'copy_html'}),
	mediaField,
	actionButtonsField,
	{
		type: 'row',
		fields: [
			alignmentField,
			textColorField,
			backgroundColorField,
		]
	},
	backgroundMediaField,
]

export const ThreeColumnModule: Block = {
	slug: 'Three Column',
	fields: [
		backgroundColorField,
		backgroundMediaField,
		moduleHeightField,
		fullWidthField,
		{
			name: 'columnOne',
			label: 'Column One',
			type: 'group',
			fields: columnFields
		},
		{
			name: 'columnTwo',
			label: 'Column Two',
			type: 'group',
			fields: columnFields
		},
		{
			name: 'columnThree',
			label: 'Column Three',
			type: 'group',
			fields: columnFields
		},
	],
}
