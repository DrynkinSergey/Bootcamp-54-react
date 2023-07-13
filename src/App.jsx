import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItemsThunk } from './redux/itemSlice'
import { Header } from './components/Header'
import { SearchForm } from './components/SearchForm'
import { ItemsList } from './components/ItemsList'
import { Cart } from './components/Cart'
import { Container, Drawer } from '@mui/material'
import { selectCartProd } from './redux/selectors'

export const App = () => {
	const dispatch = useDispatch()
	const [open, setOpen] = useState(false)
	const data = useSelector(selectCartProd)
	useEffect(() => {
		dispatch(getItemsThunk())
	}, [dispatch])
	return (
		<div>
			<Header handleOpen={() => setOpen(true)} />
			{/* <Cart /> */}
			<Container sx={{ mt: '2rem' }}>
				<SearchForm />
				<ItemsList />
				<Cart open={open} data={data} onClose={() => setOpen(false)} />
			</Container>
		</div>
	)
}
