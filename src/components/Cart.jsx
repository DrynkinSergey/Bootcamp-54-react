import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCart, selectCartTotal } from '../redux/productsSelector'
import { deleteFromCart } from '../redux/cartSlice'

export const Cart = () => {
	const cartItems = useSelector(selectCart)
	const total = useSelector(selectCartTotal)
	const dispatch = useDispatch()
	return (
		<div>
			{!cartItems.length ? (
				<h1>Cart is empty</h1>
			) : (
				<>
					<ul>
						{cartItems.map(item => (
							<li key={item.id}>
								<span>{item.title}</span>
								<span>{item.price}</span>
								<button onClick={() => dispatch(deleteFromCart(item.id))}>
									Delete
								</button>
							</li>
						))}
					</ul>
					<hr />
					<p>Total:{total}</p>
				</>
			)}
		</div>
	)
}
