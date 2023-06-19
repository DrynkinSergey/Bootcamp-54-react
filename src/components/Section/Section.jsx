import React from 'react'

export const Section = props => {
	console.log(props)
	const { title = 'BASIC SECTION NAME', data = [], id } = props

	return (
		<section>
			<h2>{title}</h2>
			<ul>
				{data.map((item, index) => (
					<li key={item.id}>
						{index}.{item.title}
					</li>
				))}
				{/* <li>{data[0].title}</li> */}
			</ul>

			<hr />
		</section>
	)
}
