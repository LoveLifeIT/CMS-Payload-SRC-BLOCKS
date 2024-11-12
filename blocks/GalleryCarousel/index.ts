import type { Block } from 'payload/types'

export const GalleryCarousel: Block = {
	slug: 'Gallery Carousel',
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
				}
			]
		}
	],
}
