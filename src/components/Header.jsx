import { AppBar, Badge, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { selectCart } from '../redux/productsSelector'
import { useSelector } from 'react-redux'

export const Header = ({ handleOpen }) => {
	const cartData = useSelector(selectCart)
	return (
		<AppBar position='sticky'>
			<Toolbar>
				<Typography variant='h6' component='span' sx={{ flexGrow: 1 }}>
					OUR STORE
				</Typography>
				<Badge badgeContent={cartData.length} color='success'>
					<Button onClick={handleOpen} color='inherit' variant='outlined'>
						Cart
					</Button>
				</Badge>
			</Toolbar>
		</AppBar>
	)
}
