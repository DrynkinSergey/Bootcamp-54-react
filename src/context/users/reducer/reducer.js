import {
	ADD_USER,
	CHANGE_NAME,
	REMOVE_USER,
	SET_FETCHED_USER,
} from './constanst'

export const userReducer = (state, action) => {
	console.log(action)
	const { type, payload } = action
	switch (type) {
		case SET_FETCHED_USER:
			return {
				...state,
				users: payload,
			}
		case ADD_USER:
			return {
				...state,
				users: [...state.users, payload],
			}

		case CHANGE_NAME:
			return {
				...state,
				users: state.users.map(user =>
					user.id === payload.id ? { ...user, name: payload.name } : user
				),
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
