import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from './redux/itemsOperations'
import { selectProducts } from './redux/productsSelector'
import { ProductList } from './components/ProductList'
import { SearchForm } from './components/SearchForm'
import { Cart } from './components/Cart'
import { Header } from './components/Header'
import { Container } from '@mui/material'

export const App = () => {
	const dispatch = useDispatch()
	const [isOpen, setIsOpen] = useState(false)

	const products = useSelector(selectProducts)
	useEffect(() => {
		dispatch(getProductsThunk())
	}, [dispatch])
	return (
		<div>
			<Header handleOpen={() => setIsOpen(true)} />
			{/* <Cart /> */}
			<Container sx={{ marginTop: '1rem' }}>
				<SearchForm />
				<ProductList />
				<Cart open={isOpen} onClose={() => setIsOpen(false)} />
			</Container>
		</div>
	)
}
