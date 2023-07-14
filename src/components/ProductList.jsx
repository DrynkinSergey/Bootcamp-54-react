import React from 'react'
import { selectFiltered, selectProducts } from '../redux/productsSelector'
import { useSelector } from 'react-redux'
import { ProductCard } from './ProductCard'

export const ProductList = () => {
	const products = useSelector(selectFiltered)
	return (
		<ul>
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</ul>
	)
}
