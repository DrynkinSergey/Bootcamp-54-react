import { createSlice } from '@reduxjs/toolkit'
import { addTodoThunk, deleteTodoThunk, fetchTodoThunk } from './operations'

const initialState = {
	tasks: [],
	filter: 'All',
	loading: false,
	error: '',
}

const rejected = (state, action) => {
	state.loading = false
	state.error = action.payload
}
const pending = (state, action) => {
	state.loading = true
	state.error = ''
}

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
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
	extraReducers: builder => {
		builder
			.addCase(fetchTodoThunk.fulfilled, (state, action) => {
				state.tasks = action.payload
				state.loading = false
			})
			.addCase(addTodoThunk.fulfilled, (state, action) => {
				state.tasks.push(action.payload)
				state.loading = false
			})
			.addCase(deleteTodoThunk.fulfilled, (state, action) => {
				const index = state.tasks.findIndex(
					task => task.id === action.payload.id
				)
				state.tasks.splice(index, 1)
				state.loading = false
			})
			.addMatcher(action => action.type.endsWith('/pending'), pending)
			.addMatcher(action => action.type.endsWith('/rejected'), rejected)
	},
})

export const { deleteMarked, setFilter, toggleTodo } = todoSlice.actions
export const todoReducer = todoSlice.reducer
