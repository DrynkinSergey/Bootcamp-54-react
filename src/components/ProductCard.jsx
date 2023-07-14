import React from 'react'

export const ProductCard = ({ product }) => {
	const { id, title, description, thumbnail, price } = product
	return (
		<li>
			<img src={thumbnail} alt={title} />
			<p>{title}</p>
			<p>{description}</p>
			<p>{price}$</p>
			<button onClick={() => console.log(product)}>Add to cart</button>
		</li>
	)
}
