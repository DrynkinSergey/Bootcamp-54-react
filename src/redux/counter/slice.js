import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	counter: 1,
	step: 1,
}
const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state, action) => {
			state.counter += state.step
		},
		decrement: (state, action) => {
			state.counter -= state.step
		},
		reset: (state, action) => {
			state.counter = 0
		},
		changeStep: (state, action) => {
			state.step = action.payload
		},
	},
})

export const { increment, decrement, reset, changeStep } = counterSlice.actions
export const counterReducer = counterSlice.reducer
