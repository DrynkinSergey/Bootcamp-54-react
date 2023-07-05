import { CHANGE_STEP, DECREMENT, INCREMENT, RESET } from './constants'

const initialState = {
	count: 1,
	step: 1,
}

export const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				count: state.count + state.step,
			}
		case DECREMENT:
			return {
				...state,
				count: state.count - state.step,
			}
		case RESET:
			return {
				...state,
				count: 0,
			}
		case CHANGE_STEP:
			return {
				...state,
				step: action.payload,
			}

		default:
			return state
	}
}
