import { createSelector } from '@reduxjs/toolkit'

export const selectProduct = state => state.itemsData.items
export const selectFilter = state => state.itemsData.filter
export const selectCartProd = state => state.cart.items
export const selectTotalCart = createSelector([selectCartProd], items => {
	return items.reduce((acc, current) => (acc += current.price), 0)
})
export const selectFilteredData = createSelector(
	[selectProduct, selectFilter],
	(items, filter) => {
		return items.filter(item =>
			item.title.toLowerCase().includes(filter.toLowerCase())
		)
	}
)
