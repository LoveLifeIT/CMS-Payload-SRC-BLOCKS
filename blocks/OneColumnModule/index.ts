import type {Block} from 'payload/types'
import {HTMLConverterFeature, lexicalEditor, lexicalHTML} from "@payloadcms/richtext-lexical";
import {
	actionButtonsField, alignmentField, backgroundColorField, backgroundMediaField, mediaField, moduleHeightField, textColorField
} from "../../fields/fields";
import {modalCarouselSlidesField} from "../../fields/carouselSlides";
import {filterSupportedFeatures} from "../../lib/utils";

let suppressFeatures = [
	'horizontalrule',
	// 'upload',
	// 'blockquote',
	// 'relationship',
	'link',
	// 'checkList',
	// 'orderedList',
	// 'unorderedList',
	// 'indent',
	// 'align',
	'heading',
	'paragraph',
	'inlineCode',
	'superscript',
	'subscript',
	'strikethrough',
	'underline',
	'italic'
]

export const OneColumnModule: Block = {
	slug: 'One Column',
	fields: [
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
		moduleHeightField,
		modalCarouselSlidesField
	],
}
