import {
	ADD_TODO,
	DELETE_MARKED,
	DELETE_TODO,
	SET_FILTER,
	TOGGLE_TODO,
} from './constants'

const initialState = {
	tasks: [],
	filter: 'All',
}

export const todoReducer = (state = initialState, action) => {
	console.log(action)
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				tasks: [...state.tasks, action.payload],
			}
		case DELETE_TODO:
			return {
				...state,
				tasks: state.tasks.filter(todo => todo.id !== action.payload.id),
			}
		case TOGGLE_TODO:
			return {
				...state,
				tasks: state.tasks.map(todo =>
					todo.id === action.payload.id
						? { ...todo, completed: !todo.completed }
						: todo
				),
			}
		case DELETE_MARKED:
			return {
				...state,
				tasks: state.tasks.filter(todo => todo.completed),
			}
		case SET_FILTER:
			return {
				...state,
				filter: action.payload.filter,
			}
		default:
			return state
	}
}
