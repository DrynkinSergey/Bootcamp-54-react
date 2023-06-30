import { ADD_USER, REMOVE_USER } from './constanst'

export const addUser = name => {
	return {
		type: ADD_USER,
		payload: {
			name,
			position: 'Developer',
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
