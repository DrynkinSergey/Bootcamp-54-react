import { todoReducer } from './todoList/slice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
	reducer: {
		todoList: todoReducer,
	},

	devTools: process.env.NODE_ENV !== 'production',
})
