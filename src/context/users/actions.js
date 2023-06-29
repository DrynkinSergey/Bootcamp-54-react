import { ADD_USER, DELETE_USER, FETCH_USERS, SORT } from './constants'

export const fetchUsers = users => {
	return {
		type: FETCH_USERS,
		payload: users,
	}
}
export const addUser = user => {
	return {
		type: ADD_USER,
		payload: user,
	}
}
export const sortUsers = type => {
	return {
		type: SORT,
		payload: type,
	}
}
export const deleteUser = id => {
	return {
		type: DELETE_USER,
		payload: id,
	}
}
