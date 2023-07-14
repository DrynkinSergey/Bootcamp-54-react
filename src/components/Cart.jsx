import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCart, selectCartTotal } from '../redux/productsSelector'
import { deleteFromCart } from '../redux/cartSlice'
import {
	Button,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material'
import { Close, ShoppingBasket } from '@mui/icons-material'
import { Stack } from 'immutable'

export const Cart = ({ open, onClose }) => {
	const cartItems = useSelector(selectCart)
	const total = useSelector(selectCartTotal)
	const dispatch = useDispatch()
	return (
		<Drawer anchor='right' open={open} onClose={onClose}>
			<List sx={{ width: '500px' }}>
				<ListItem>
					<ListItemIcon>
						<ShoppingBasket />
					</ListItemIcon>
					<ListItemText primary='Cart' />
				</ListItem>
				<Divider />

				{!cartItems.length ? (
					<Typography variant='h4'>Cart is empty</Typography>
				) : (
					<>
						{cartItems.map(item => (
							<ListItem key={item.id}>
								<Typography variant='body1'>{item.title}</Typography>
								<Typography variant='body1'>{item.price}</Typography>
								<Close onClick={() => dispatch(deleteFromCart(item.id))}>
									Delete
								</Close>
							</ListItem>
						))}
						<Divider />
						<p>Total:{total}</p>
					</>
				)}
			</List>
			{/* {!cartItems.length ? (
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
			)} */}
		</Drawer>
	)
}
