import { createSlice } from '@reduxjs/toolkit'
import { getProductsThunk } from './itemsOperations'

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		products: [],
		filter: '',
		error: null,
		loading: false,
	},
	reducers: {
		changeFilter: (state, { payload }) => {
			state.filter = payload
		},
	},
	extraReducers: builder => {
		builder.addCase(getProductsThunk.pending, (state, { payload }) => {
			state.loading = true
			state.error = null
		})
		builder.addCase(getProductsThunk.rejected, (state, { payload }) => {
			state.loading = false
			state.error = payload
		})
		builder.addCase(getProductsThunk.fulfilled, (state, { payload }) => {
			state.products = payload
			state.loading = false
		})
	},
})

export const productsReducer = productsSlice.reducer
export const { changeFilter } = productsSlice.actions
