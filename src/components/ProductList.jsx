import React from 'react'
import { selectProducts } from '../redux/productsSelector'
import { useSelector } from 'react-redux'
import { ProductCard } from './ProductCard'

export const ProductList = () => {
	const products = useSelector(selectProducts)
	return (
		<ul>
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</ul>
	)
}
