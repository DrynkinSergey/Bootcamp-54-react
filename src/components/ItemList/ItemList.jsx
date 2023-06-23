import React from 'react'

export const ItemList = ({ data = [] }) => {
	console.log(data)
	return (
		<>
			<h2>My books list</h2>
			<ol>
				{data.map(item => (
					<li key={item.id}>{item.title}</li>
				))}
			</ol>
		</>
	)
}
