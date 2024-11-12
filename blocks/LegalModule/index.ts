import type {Block} from 'payload/types'
import {HTMLConverterFeature, lexicalEditor, lexicalHTML} from "@payloadcms/richtext-lexical";
import {filterSupportedFeatures} from "../../lib/utils";

export const LegalModule: Block = {
	slug: 'Legal Module',
	fields: [
		{
			name: 'leftNav',
			type: 'relationship',
			relationTo: ['leftnavs'],
			hasMany: false,
			required: true,
		},
		{
			name: 'legalCopy',
			label: 'Legal Copy',
			type: 'richText',
			editor: lexicalEditor({
				features: ({defaultFeatures}) => [...filterSupportedFeatures(defaultFeatures), HTMLConverterFeature({})]
			})
		},
		lexicalHTML('legalCopy', {name: 'legalCopy_html'}),
		{
			name: 'legalCopy2',
			label: 'Legal Copy (extra copy, over 40,000 characters)',
			type: 'richText',
			editor: lexicalEditor({
				features: ({defaultFeatures}) => [...filterSupportedFeatures(defaultFeatures), HTMLConverterFeature({})]
			})
		},
		lexicalHTML('legalCopy2', {name: 'legalCopy2_html'}),
	],
}
