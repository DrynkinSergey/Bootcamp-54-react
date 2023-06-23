import React from 'react'

export const ItemList = ({ data = [], title = 'My list' }) => {
	return (
		<>
			<h2>{title}</h2>
			<ol>
				{data.map(item => (
					<li key={item.id}>{item.title}</li>
				))}
			</ol>
		</>
	)
}
