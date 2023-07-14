import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

export const ProductCard = ({ product }) => {
	const { id, title, description, thumbnail, price } = product
	const dispatch = useDispatch()
	return (
		<li>
			<img src={thumbnail} alt={title} />
			<p>{title}</p>
			<p>{description}</p>
			<p>{price}$</p>
			<button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
		</li>
	)
}
