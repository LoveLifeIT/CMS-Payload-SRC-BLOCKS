import type {Block} from 'payload/types'
import {HTMLConverterFeature, lexicalEditor, lexicalHTML} from "@payloadcms/richtext-lexical";
import {textColorField} from "../../fields/fields";
import {filterSupportedFeatures} from "../../lib/utils";

export const ContactModule: Block = {
	slug: 'Contact Us Module',
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
		{
			name: 'postSubmitCopy',
			type: 'text',
			label: 'Thank you Copy (post submit)',
		},
		textColorField
	],
}