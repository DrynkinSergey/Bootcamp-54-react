import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
	},
	reducers: {
		addToCart: (state, { payload }) => {
			state.items.push(payload)
		},
		deleteFromCart: (state, { payload }) => {
			const index = state.items.findIndex(item => item.id === payload)
			state.items.splice(index, 1)
		},
	},
})

export const { addToCart, deleteFromCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
