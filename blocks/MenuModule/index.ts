import type {Block} from 'payload/types'
import {HTMLConverterFeature, lexicalEditor, lexicalHTML} from "@payloadcms/richtext-lexical";
import {actionButtonsField, backgroundColorField, backgroundMediaField, textColorField, menuRowField} from "../../fields/fields";
import {filterSupportedFeatures} from "../../lib/utils";


export const MenuModule: Block = {
	slug: 'Menu Module',
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
		menuRowField,
		actionButtonsField,
		textColorField,
		backgroundColorField,
		backgroundMediaField,
	],
}
