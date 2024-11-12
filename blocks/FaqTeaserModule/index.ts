import type {Block} from 'payload/types'
import {HTMLConverterFeature, lexicalEditor, lexicalHTML} from "@payloadcms/richtext-lexical";
import {actionButtonsField} from "../../fields/fields";
import {filterSupportedFeatures} from "../../lib/utils";

export const FaqTeaserModule: Block = {
	slug: 'Faq Teaser',
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
			name: 'faq',
			label: 'FAQ',
			type: 'relationship',
			relationTo: 'faq',
			hasMany: true
		}
	],
}
