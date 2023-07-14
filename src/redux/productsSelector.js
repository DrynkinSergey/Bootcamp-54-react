import { createSelector } from 'reselect'

export const selectProducts = state => state.productsData.products
export const selectFilter = state => state.productsData.filter

export const selectCart = state => state.cart.items

export const selectFiltered = createSelector(
	[selectProducts, selectFilter],
	(products, filter) => {
		return products.filter(product =>
			product.title.toLowerCase().includes(filter.toLowerCase())
		)
	}
)

export const selectCartTotal = createSelector([selectCart], items => {
	return items.reduce((total, current) => total + current.price, 0)
})
