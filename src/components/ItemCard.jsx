import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from '@mui/material'

export const ItemCard = ({ product }) => {
	const { id, title, description, price, thumbnail } = product
	const dispatch = useDispatch()
	return (
		<Grid item md={4} xs={8} sm={6}>
			<Card sx={{ height: '350px', position: 'relative' }}>
				<CardActionArea>
					<CardMedia component='img' height='140' image={thumbnail} alt='img' />
					<CardContent>
						<Typography gutterBottom variant='h5' component='div'>
							{title}
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							{description}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions
					sx={{ position: 'absolute', bottom: '12px', right: '20px' }}
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
		// <li>
		// 	<div>
		// 		<img src={thumbnail} alt='' />
		// 		<span>{title}</span>
		// 		<span>{description}</span>
		// 		<span>{price}</span>
		// 		<button onClick={() => dispatch(addToCart(product))}>
		// 			Add to cart
		// 		</button>
		// 	</div>
		// </li>
	)
}
