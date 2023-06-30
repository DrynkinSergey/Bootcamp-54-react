import { ADD_USER, REMOVE_USER } from './constanst'

export const userReducer = (state, action) => {
	console.log(action)
	const { type, payload } = action
	switch (type) {
		case ADD_USER:
			return {
				...state,
				users: [...state.users, payload],
			}
		case REMOVE_USER:
			return {
				...state,
				users: state.users.filter(user => user.id !== payload),
			}
		default:
			return state
	}
}
