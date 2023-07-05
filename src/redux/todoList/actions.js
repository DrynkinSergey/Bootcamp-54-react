import {
	ADD_TODO,
	DELETE_MARKED,
	DELETE_TODO,
	SET_FILTER,
	TOGGLE_TODO,
} from './constants'

export const addTodo = todo => {
	return {
		type: ADD_TODO,
		payload: {
			id: crypto.randomUUID(),
			completed: false,
			todo: todo,
		},
	}
}
export const deleteTodo = id => {
	return {
		type: DELETE_TODO,
		payload: { id },
	}
}
export const toggleTodo = id => {
	return {
		type: TOGGLE_TODO,
		payload: { id },
	}
}
export const deleteMarked = () => {
	return {
		type: DELETE_MARKED,
	}
}
export const setFilter = filter => {
	return {
		type: SET_FILTER,
		payload: { filter },
	}
}
