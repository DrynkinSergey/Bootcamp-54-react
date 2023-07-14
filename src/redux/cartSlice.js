import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	items: [],
}

const cartSlice = createSlice({
	name: 'Cart',
	initialState,
	reducers: {
		addToCart: (state, { payload }) => {
			state.items.push(payload)
		},
		deleteFromCart: (state, { payload }) => {
			state.items = state.items.filter(item => item.id !== payload)
		},
	},
})

export const cartReducer = cartSlice.reducer
export const { addToCart, deleteFromCart } = cartSlice.actions
