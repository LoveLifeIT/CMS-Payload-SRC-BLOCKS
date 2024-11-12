import type { Block } from 'payload/types'
import {actionButtonsField} from "../../fields/fields";

export const ModalCarouselModule: Block = {
	slug: 'Modal Carousel',
	fields: [
		{
			name: 'slides',
			label: 'Slides',
			type: 'array',
			fields: [
				{
					name: 'image',
					label: 'Image',
					type: 'upload',
					relationTo: 'media'
				},
				{
					name: 'header',
					label: 'Header',
					type: 'text',
				},
				{
					name: 'title',
					label: 'Title',
					type: 'text',
				},
				{
					name: 'subTitle',
					label: 'Subtitle',
					type: 'text',
				},
				{
					name: 'copy',
					label: 'Copy',
					type: 'textarea',
				},
				actionButtonsField
			]
		}
	],
}