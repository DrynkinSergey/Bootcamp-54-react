import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartProd, selectTotalCart } from '../redux/selectors'
import {
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material'
import { ShoppingBasket } from '@mui/icons-material'
import { CartItem } from './CartItem'

export const Cart = ({ open, onClose, data }) => {
	const totalCartCost = useSelector(selectTotalCart)

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
				{!data.length ? (
					<Typography variant='h4'>Cart is empty</Typography>
				) : (
					<>
						{data.map(item => (
							<CartItem {...item} />
						))}
						<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
							Total cart: {totalCartCost}
						</Typography>
					</>
				)}
				<Divider />
			</List>
		</Drawer>
		// <div>
		// 	<h1>Cart</h1>
		// 	<ul>
		// 		{cartItems.map(item => (
		// 			<li>{item.title}</li>
		// 		))}
		// 	</ul>
		// 	<h1>Total: {totalCartCost}</h1>
		// </div>
	)
}
