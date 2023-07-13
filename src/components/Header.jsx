import {
	AppBar,
	Badge,
	Button,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material'
import React from 'react'
import { selectCartProd } from '../redux/selectors'
import { useSelector } from 'react-redux'

export const Header = ({ handleOpen }) => {
	const selectCart = useSelector(selectCartProd)
	return (
		<AppBar position='sticky'>
			<Toolbar>
				<Typography variant='h4' component='span' sx={{ flexGrow: 1 }}>
					GO IT STORE
				</Typography>
				<Badge badgeContent={selectCart.length} color='success'>
					<Button onClick={handleOpen} variant='outlined' color='inherit'>
						Cart
					</Button>
				</Badge>
			</Toolbar>
		</AppBar>
		// <header>
		// 	<h1>GO IT STORE</h1>
		// 	cart
		// </header>
	)
}
