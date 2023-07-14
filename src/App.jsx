import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from './redux/itemsOperations'
import { selectProducts } from './redux/productsSelector'
import { ProductList } from './components/ProductList'

export const App = () => {
	const dispatch = useDispatch()
	const products = useSelector(selectProducts)
	useEffect(() => {
		dispatch(getProductsThunk())
	}, [dispatch])
	return (
		<div>
			<ProductList />
		</div>
	)
}
