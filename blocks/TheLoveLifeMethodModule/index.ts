import type {Block} from 'payload/types'
import {HTMLConverterFeature, lexicalEditor, lexicalHTML} from "@payloadcms/richtext-lexical";
import { backgroundColorField, backgroundMediaField } from "../../fields/fields";
import {filterSupportedFeatures} from "../../lib/utils";

export const TheLoveLifeMethodModule: Block = {
	slug: 'The LoveLife Method',
	fields: [
		{
			name: 'title',
			type: 'richText',
			required: false,
			editor: lexicalEditor({
				features: ({defaultFeatures}) => [...filterSupportedFeatures(defaultFeatures), HTMLConverterFeature({})]
			}),
		},
		lexicalHTML('title', {name: 'title_html'}),
		{
			name: 'methods',
			type: 'array',
			fields: [
				{
					name: 'method',
					type: 'richText',
					editor: lexicalEditor({
						features: ({defaultFeatures}) => [...filterSupportedFeatures(defaultFeatures), HTMLConverterFeature({})]
					}),
				},
				lexicalHTML('method', {name: 'method_html'}),
			],
		},
		backgroundMediaField,
		backgroundColorField
	],
}
