import React from 'react'
import { useSelector } from 'react-redux'
import { ItemCard } from './ItemCard'
import { selectFilteredData, selectProduct } from '../redux/selectors'

export const ItemsList = () => {
	const data = useSelector(selectFilteredData)
	return (
		<ul>
			{data.map(prod => (
				<ItemCard key={prod.id} product={prod} />
			))}
		</ul>
	)
}
