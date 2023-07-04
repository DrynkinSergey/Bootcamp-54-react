import { DECREMENT, INCREMENT, RESET } from './constants'

const initialState = {
	counter: 1,
}

export const counterReducer = (state = initialState, action) => {
	console.log(action)
	const { payload, type } = action
	switch (type) {
		case INCREMENT:
			return {
				counter: state.counter + 1,
			}
		case DECREMENT:
			return {
				counter: state.counter - 1,
			}
		case RESET:
			return {
				counter: 0,
			}
		default:
			return state
	}
}
