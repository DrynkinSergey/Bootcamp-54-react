import React from 'react'
import { Item } from '../Item'

export const Section = props => {
	const { title = 'BASIC SECTION NAME', data = [], id } = props

	if (!data.length) {
		return <h1>You haven't data</h1>
	}

	return (
		<section>
			<h2>{title}</h2>
			{data.length > 3 && <h2>You have big list</h2>}
			<ul>
				{data.map((item, index) => (
					<Item key={item.id} title={item.title} />
				))}
			</ul>

			<hr />
		</section>
	)
}
