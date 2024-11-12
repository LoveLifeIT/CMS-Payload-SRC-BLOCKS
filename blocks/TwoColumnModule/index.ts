import type {Block, Field} from 'payload/types'
import {HTMLConverterFeature, lexicalEditor, lexicalHTML} from "@payloadcms/richtext-lexical";
import {
	$alignmentField, actionButtonsField, backgroundColorField,
	backgroundMediaField, downloadButtonsField, fullWidthField, mediaField, moduleHeightField, textColorField
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
	downloadButtonsField,
	{
		type: 'row',
		fields: [
			$alignmentField({defaultValue: 'left'}),
			textColorField,
			backgroundColorField,
		]
	},
	backgroundMediaField,
]

export const TwoColumnModule: Block = {
	slug: 'Two Column',
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
	],
}
