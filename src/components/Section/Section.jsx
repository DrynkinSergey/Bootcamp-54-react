import React from 'react'

export const Section = props => {
	console.log(props)
	const { title = 'BASIC SECTION NAME', data = [], id } = props

	if (!data.length) {
		return <h1>You haven't data</h1>
	}

	return (
		<section>
			{/* {!data.length && <h1>You haven't data</h1>} */}
			<h2>{title}</h2>
			{data.length > 3 && <h2>You have big list</h2>}
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
