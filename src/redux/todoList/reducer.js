import { createReducer } from '@reduxjs/toolkit'
import {
	addTodo,
	deleteMarked,
	deleteTodo,
	setFilter,
	toggleTodo,
} from './actions'

const initialState = {
	tasks: [],
	filter: 'All',
}

// export const todoReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case ADD_TODO:
// 			return {
// 				...state,
// 				tasks: [...state.tasks, action.payload],
// 			}
// 		case DELETE_TODO:
// 			return {
// 				...state,
// 				tasks: state.tasks.filter(todo => todo.id !== action.payload.id),
// 			}
// 		case TOGGLE_TODO:
// 			return {
// 				...state,
// 				tasks: state.tasks.map(todo =>
// 					todo.id === action.payload.id
// 						? { ...todo, completed: !todo.completed }
// 						: todo
// 				),
// 			}
// 		case DELETE_MARKED:
// 			return {
// 				...state,
// 				tasks: state.tasks.filter(todo => todo.completed),
// 			}
// 		case SET_FILTER:
// 			return {
// 				...state,
// 				filter: action.payload.filter,
// 			}
// 		default:
// 			return state
// 	}
// }

export const todoReducer = createReducer(initialState, builder => {
	builder
		.addCase(addTodo, (state, { payload }) => {
			state.tasks.push(payload)
		})
		.addCase(deleteTodo, (state, action) => {
			const index = state.tasks.findIndex(task => task.id === action.payload)
			state.tasks.splice(index, 1)
		})
		.addCase(toggleTodo, (state, action) => {
			const todo = state.tasks.find(todo => todo.id === action.payload)
			todo.completed = !todo.completed
		})
		.addCase(deleteMarked, (state, action) => {
			return {
				...state,
				tasks: state.tasks.filter(todo => !todo.completed),
			}
		})
		.addCase(setFilter, (state, action) => {
			state.filter = action.payload
		})
})
