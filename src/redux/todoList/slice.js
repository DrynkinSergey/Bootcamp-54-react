import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
	tasks: [],
	filter: 'All',
}

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		// addTodo: (state, action) => {
		// 	state.tasks.push(action.payload)
		// },
		addTodo: {
			reducer: (state, action) => {
				state.tasks.push(action.payload)
			},
			prepare: todo => {
				return {
					payload: {
						todo,
						id: nanoid(),
						createdAt: new Date().toLocaleTimeString(),
						completed: false,
					},
				}
			},
		},
		deleteTodo: (state, action) => {
			const index = state.tasks.findIndex(task => task.id === action.payload)
			state.tasks.splice(index, 1)
		},
		toggleTodo: (state, action) => {
			const item = state.tasks.find(task => task.id === action.payload)
			item.completed = !item.completed
		},
		setFilter: (state, action) => {
			state.filter = action.payload
		},
		deleteMarked: (state, action) => {
			return {
				...state,
				tasks: state.tasks.filter(todo => !todo.completed),
			}
		},
	},
})

export const { addTodo, deleteMarked, deleteTodo, setFilter, toggleTodo } =
	todoSlice.actions
export const todoReducer = todoSlice.reducer
