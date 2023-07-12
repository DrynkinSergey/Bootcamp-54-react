import { todoReducer } from './todoList/slice'
import { configureStore } from '@reduxjs/toolkit'
import { filterReducer } from './todoList/filterSlice'
import { themeReducer } from './themeSlice'
import { authReducer } from './auth/authSlice'
//StepanIsAwesome@mail.com
// https://goit-task-manager.herokuapp.com/
export const store = configureStore({
	reducer: {
		todoList: todoReducer,
		auth: authReducer,
		filter: filterReducer,
		theme: themeReducer,
	},

	devTools: process.env.NODE_ENV !== 'production',
})
