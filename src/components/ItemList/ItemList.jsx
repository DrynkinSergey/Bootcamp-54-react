import React from 'react'

export const ItemList = ({
	onDelete,
	onItemClick,
	data = [],
	title = 'My list',
}) => {
	return (
		<>
			<h2>{title}</h2>
			<ol>
				{data.map(item => (
					<li
						onClick={() =>
							onItemClick(item.tag === 'books' ? 'films' : 'books', item.id)
						}
						key={item.id}
					>
						{item.title}
						<button onClick={() => onDelete(item.id)}>Delete</button>
					</li>
				))}
			</ol>
		</>
	)
}
