import { ADD_TODO, DELETE_TODO } from './constants'

export const addTodo = todo => {
	return {
		type: ADD_TODO,
		payload: {
			id: crypto.randomUUID(),
			todo,
			completed: false,
		},
	}
}
export const deleteTodo = id => {
	return {
		type: DELETE_TODO,
		payload: id,
	}
}
