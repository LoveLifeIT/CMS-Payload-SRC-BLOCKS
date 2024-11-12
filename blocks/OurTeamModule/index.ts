import type { Block } from 'payload/types'

export const OurTeamModule: Block = {
	slug: 'Our Team',
	fields: [
		{
			name: 'teams',
			label: 'Teams',
			type: 'array',
			fields: [
				{
					name: 'name',
					type: 'text',
					required: true
				},
				{
					name: 'people',
					type: 'relationship',
					relationTo: 'people',
					hasMany: true,
				}
			],
		},

	],
}
