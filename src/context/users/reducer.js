import { ADD_USER, DELETE_USER, FETCH_USERS, SORT } from './constants'

export const userReducer = (state, action) => {
	switch (action.type) {
		case FETCH_USERS:
			return {
				...state,
				users: action.payload,
			}
		case DELETE_USER:
			return {
				...state,
				users: state.users.filter(i => i.id !== action.payload),
			}
		case ADD_USER:
			return {
				...state,
				users: [...state.users, action.payload],
			}
		case SORT:
			return {
				...state,
				type: action.payload,
			}
		default:
			return state
	}
}
