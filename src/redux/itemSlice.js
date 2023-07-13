import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getItemsThunk = createAsyncThunk(
	'getAll',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await axios.get('https://dummyjson.com/products')
			return data.products
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

const itemSlice = createSlice({
	name: 'items',
	initialState: {
		items: [],
		filter: '',
	},
	reducers: {
		setFilter: (state, action) => {
			state.filter = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(getItemsThunk.fulfilled, (state, action) => {
			state.items = action.payload
		})
	},
})

export const itemsReducer = itemSlice.reducer
export const { setFilter } = itemSlice.actions
