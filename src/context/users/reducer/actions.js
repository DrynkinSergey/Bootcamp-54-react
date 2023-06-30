import {
	ADD_USER,
	CHANGE_NAME,
	REMOVE_USER,
	SET_FETCHED_USER,
} from './constanst'

export const setUsersFromServer = users => {
	return {
		type: SET_FETCHED_USER,
		payload: users,
	}
}

export const addUser = ({ name, position }) => {
	return {
		type: ADD_USER,
		payload: {
			name,
			position,
			id: crypto.randomUUID(),
		},
	}
}

export const removeUser = id => {
	return {
		type: REMOVE_USER,
		payload: id,
	}
}
export const changeUserName = user => {
	return {
		type: CHANGE_NAME,
		payload: user,
	}
}
