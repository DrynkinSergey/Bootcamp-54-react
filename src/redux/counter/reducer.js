import { createReducer } from '@reduxjs/toolkit'
import { changeStep, decrement, increment, reset } from './actions'

const initialState = {
	counter: 1,
	step: 1,
}

// export const counterReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case increment.type:
// 			return {
// 				...state,
// 				count: state.count + state.step,
// 			}
// 		case decrement.type:
// 			return {
// 				...state,
// 				count: state.count - state.step,
// 			}
// 		case reset.type:
// 			return {
// 				...state,
// 				count: 0,
// 			}
// 		case changeStep.type:
// 			return {
// 				...state,
// 				step: action.payload,
// 			}

// 		default:
// 			return state
// 	}
// }

//OBJECT NOTATION
// export const counterReducer = createReducer(initialState, {
// 	[increment]: (state, action) => {
// 		state.counter += state.step
// 	},
// 	[decrement]: (state, action) => {
// 		state.counter -= state.step
// 	},
// 	[reset]: (state, action) => {
// 		state.counter = 0
// 	},
// 	[changeStep]: (state, action) => {
// 		state.step = action.payload
// 	},
// })

export const counterReducer = createReducer(initialState, builder => {
	builder
		.addCase(increment, state => {
			state.counter += state.step
		})
		.addCase(decrement, state => {
			state.counter -= state.step
		})
		.addCase(reset, state => {
			state.counter = 0
		})
		.addCase(changeStep, (state, action) => {
			state.step = action.payload
		})
})
