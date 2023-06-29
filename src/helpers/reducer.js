export const initialState = {
	counter: 1,
	step: 1,
}
export const counterReducer = (state, action) => {
	console.log('action =====>>> ', action)
	switch (action.type) {
		case 'plus':
			return {
				...state,
				counter: state.counter + state.step,
			}
		case 'minus':
			return {
				...state,
				counter: state.counter - state.step,
			}
		case 'reset':
			return {
				...state,
				counter: 0,
			}
		case 'setStep':
			return {
				...state,
				step: action.payload,
			}
		default:
			return state
	}
}
