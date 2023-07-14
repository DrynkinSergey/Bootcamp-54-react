import React from 'react'
import { selectFiltered, selectProducts } from '../redux/productsSelector'
import { useSelector } from 'react-redux'
import { ProductCard } from './ProductCard'
import { Grid } from '@mui/material'

export const ProductList = () => {
	const products = useSelector(selectFiltered)
	return (
		<Grid sx={{ mt: '2rem' }} container spacing={4} justifyContent='center'>
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</Grid>
	)
}
