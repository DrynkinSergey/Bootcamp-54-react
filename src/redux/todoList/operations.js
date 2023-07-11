import axios from 'axios'

import { toast } from 'react-toastify'
import { createAsyncThunk } from '@reduxjs/toolkit'

axios.defaults.baseURL = 'https://64abd6919edb4181202ea4d0.mockapi.io'

export const fetchTodoThunk = createAsyncThunk(
	'tasks/fetchTodos',
	async (_, { rejectWithValue, dispatch, getState }) => {
		try {
			const { data } = await axios.get('/todos')
			return data
		} catch (error) {
			console.log(error)
			return rejectWithValue(error.message)
		}
	}
)

export const deleteTodoThunk = createAsyncThunk(
	'tasks/deleteTodo',
	async (id, { rejectWithValue }) => {
		try {
			const { data } = await axios.delete(`/todos/${id}`)
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	},
	{
		condition: (_, { getState }) => {
			const loading = getState().todoList.loading
			if (loading) {
				return false
			}
		},
	}
)

export const addTodoThunk = createAsyncThunk(
	'tasks/addTodo',
	async (todo, { rejectWithValue }) => {
		try {
			const { data } = await axios.post('/todos', {
				title: todo,
				completed: false,
			})
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const toggleTodoThunk = createAsyncThunk(
	'tasks/toggleTodo',
	async (todo, { rejectWithValue }) => {
		try {
			const { data } = await axios.put(`todos/${todo.id}`, {
				completed: !todo.completed,
			})
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

// export const fetchTodoThunk = () => async dispatch => {
// 	try {
// 		dispatch(setLoading(true))
// 		const { data } = await axios.get('/todos')
// 		dispatch(fetchAllTodos(data))
// 	} catch (error) {
// 		dispatch(setError(error.message))
// 	} finally {
// 		dispatch(setLoading(false))
// 	}
// }

// export const deleteTodoThunk = id => async dispatch => {
// 	try {
// 		await axios.delete(`/todos/${id}`)
// 		dispatch(deleteTodo(id))
// 		// dispatch(fetchTodoThunk())
// 	} catch (error) {
// 		toast.error('server error')
// 	}
// }
// export const addTodoThunk = todo => async dispatch => {
// 	try {
// 		const { data } = await axios.post(`/todos`, {
// 			title: todo,
// 			completed: false,
// 		})
// 		console.log(data)
// 		dispatch(addTodo(data))
// 	} catch (error) {
// 		toast.error('server error')
// 	}
// }
