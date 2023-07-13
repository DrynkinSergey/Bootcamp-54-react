import { Close } from '@mui/icons-material'
import {
	Button,
	Divider,
	ListItem,
	ListItemIcon,
	Stack,
	Typography,
} from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteFromCart } from '../redux/cartSlice'

export const CartItem = ({ id, title, price, deleteItem }) => {
	const dispatch = useDispatch()
	return (
		<ListItem>
			<Stack
				direction='row'
				sx={{ width: '100%' }}
				justifyContent='space-between'
				spacing={2}
			>
				<Typography variant='body1'>{title}</Typography>
				<Typography sx={{ fontWeight: 'bold' }} variant='body1'>
					{price}$
				</Typography>
				<ListItemIcon>
					<Close
						onClick={() => dispatch(deleteFromCart(id))}
						sx={{ cursor: 'pointer' }}
					/>
				</ListItemIcon>
			</Stack>
			<Divider />
		</ListItem>
	)
}
