import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getItemsThunk } from './redux/itemSlice'
import { Header } from './components/Header'
import { SearchForm } from './components/SearchForm'
import { ItemsList } from './components/ItemsList'
import { Cart } from './components/Cart'

export const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getItemsThunk())
	}, [dispatch])
	return (
		<div>
			<Header />
			<Cart />

			<SearchForm />
			<ItemsList />
		</div>
	)
}
