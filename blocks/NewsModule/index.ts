import type { Block } from 'payload/types'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from "@payloadcms/richtext-lexical";
import { actionButtonsField, backgroundColorField, backgroundMediaField, textColorField } from "../../fields/fields";
import {filterSupportedFeatures} from "../../lib/utils";


export const NewsModule: Block = {
	slug: 'News Module',
	fields: [
		{
			name: 'header',
			label: 'Header Copy',
			type: 'richText',
			editor: lexicalEditor({
				features: ({defaultFeatures}) => [...filterSupportedFeatures(defaultFeatures), HTMLConverterFeature({})]
			})
		},
		lexicalHTML('header', {name: 'header_html'}),
		actionButtonsField,
		{
			name: 'newsItems',
			label: 'News Items',
			type: 'relationship',
			relationTo: 'news',
			hasMany: true,
		},
		textColorField,
		backgroundColorField,
		backgroundMediaField,
	],
}
