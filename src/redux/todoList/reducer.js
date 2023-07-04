import { ADD_TODO, DELETE_TODO } from './constants'

const initialState = {
	tasks: [],
}

export const todoReducer = (state = initialState, action) => {
	const { type, payload } = action
	switch (type) {
		case ADD_TODO:
			return {
				...state,
				tasks: [...state.tasks, payload],
			}
		case DELETE_TODO:
			return {
				...state,
				tasks: state.tasks.filter(todo => todo.id !== payload),
			}
		default:
			return state
	}
}
