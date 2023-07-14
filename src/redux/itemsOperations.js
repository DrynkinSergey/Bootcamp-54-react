import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProducts } from '../config/itemsInstance'

export const getProductsThunk = createAsyncThunk(
	'getProducts',
	async (_, { rejectWithValue }) => {
		try {
			return await getProducts()
		} catch (error) {
			console.log(error)
			return rejectWithValue(error.message)
		}
	}
)
