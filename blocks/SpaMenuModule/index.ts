import type {Block} from 'payload/types'
import {HTMLConverterFeature, lexicalEditor, lexicalHTML} from "@payloadcms/richtext-lexical";
import {actionButtonsField, backgroundColorField, textColorField} from "../../fields/fields";
import {filterSupportedFeatures} from "../../lib/utils";

export const SpaMenuModule: Block = {
	slug: 'Spa Menu',
	fields: [
		{
			name: 'sections',
			type: 'array',
			fields: [
				{
					name: 'header',
					type: 'richText',
					editor: lexicalEditor({
						features: ({defaultFeatures}) => [...filterSupportedFeatures(defaultFeatures), HTMLConverterFeature({})]
					})
				},
				lexicalHTML('header', {name: 'header_html'}),
				actionButtonsField,
				{
					name: 'menuItems',
					type: 'array',
					fields: [
						{
							name: 'name',
							type: 'text',
							required: true
						},
						{
							name: 'options',
							type: 'array',
							fields: [
								{
									name: 'duration',
									label: 'Duration (in minutes)',
									type: 'number',
									required: false
								},
								{
									name: 'price',
									label: 'Price (in USD)',
									type: 'number',
									required: true
								}
							]
						}
					]
				},
				{
					name: 'anchor',
					label: 'Anchor for deep linking (should be unique within menu)',
					type: 'text',
				},
			]
		},
		textColorField,
		backgroundColorField
	],
}
