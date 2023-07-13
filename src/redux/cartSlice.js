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
	},
})

export const { addToCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
