import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

export const ItemCard = ({ product }) => {
	const { id, title, description, price, thumbnail } = product
	const dispatch = useDispatch()
	return (
		<li>
			<div>
				<img src={thumbnail} alt='' />
				<span>{title}</span>
				<span>{description}</span>
				<span>{price}</span>
				<button onClick={() => dispatch(addToCart(product))}>
					Add to cart
				</button>
			</div>
		</li>
	)
}
