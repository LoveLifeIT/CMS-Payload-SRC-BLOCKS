import type { Block } from 'payload/types'
import {
	$alignmentField, $backgroundColorField, $textColorField, actionButtonsField, backgroundMediaField, moduleHeightField
} from "../../fields/fields";
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from "@payloadcms/richtext-lexical";
import {filterSupportedFeatures} from "../../lib/utils";

export const OurTeamCarouselModule: Block = {
	slug: 'Our Team Carousel',
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
		{
			name: 'people',
			type: 'relationship',
			relationTo: 'people',
			hasMany: true,
		},
		actionButtonsField,
		{
			type: 'row',
			fields: [
				$alignmentField({defaultValue: 'centered'}),
				$textColorField({defaultValue: 'white'}),
				$backgroundColorField({defaultValue: 'brown'}),
			]
		},
		backgroundMediaField,
		moduleHeightField
	],
}
