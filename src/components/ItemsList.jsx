import React from 'react'
import { useSelector } from 'react-redux'
import { ItemCard } from './ItemCard'
import { selectFilteredData, selectProduct } from '../redux/selectors'
import { Grid } from '@mui/material'

export const ItemsList = () => {
	const data = useSelector(selectFilteredData)
	return (
		<Grid sx={{ mt: '1rem' }} container spacing={4} justifyContent='center'>
			{data.map(prod => (
				<ItemCard key={prod.id} product={prod} />
			))}
		</Grid>
	)
}
