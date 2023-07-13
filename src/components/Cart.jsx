import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartProd, selectTotalCart } from '../redux/selectors'

export const Cart = () => {
	const cartItems = useSelector(selectCartProd)
	const totalCartCost = useSelector(selectTotalCart)
	return (
		<div>
			<h1>Cart</h1>
			<ul>
				{cartItems.map(item => (
					<li>{item.title}</li>
				))}
			</ul>
			<h1>Total: {totalCartCost}</h1>
		</div>
	)
}
