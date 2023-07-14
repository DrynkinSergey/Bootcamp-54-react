import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material'

export const ProductCard = ({ product }) => {
	const { id, title, description, thumbnail, price } = product
	const dispatch = useDispatch()
	return (
		<Grid item xs={8} md={4}>
			<Card sx={{ padding: '1rem', height: '380px', position: 'relative' }}>
				<CardActionArea>
					<CardMedia
						component='img'
						height='180'
						image={thumbnail}
						alt={title}
					/>
					<Typography variant='body1' component='div'>
						{title}
					</Typography>
					<Typography variant='body2' component='div'>
						{description}
					</Typography>
					<Typography variant='body2' component='div'>
						{price}$
					</Typography>
				</CardActionArea>
				<CardActions
					sx={{ position: 'absolute', bottom: '20px', left: '10px' }}
				>
					<Button
						onClick={() => dispatch(addToCart(product))}
						size='small'
						color='primary'
						variant='contained'
					>
						Add to cart
					</Button>
				</CardActions>
			</Card>
		</Grid>
	)
}
