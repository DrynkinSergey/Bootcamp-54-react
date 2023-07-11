import logger from 'redux-logger'
import { todoReducer } from './todoList/slice'
import { configureStore } from '@reduxjs/toolkit'
import { filterReducer } from './todoList/filterSlice'
import { themeReducer } from './themeSlice'

const myFilterMiddleware = store => next => action => {
	console.log(action)
	if (action.payload?.title === 'Angular') {
		//заміна значення в пейлоад на своє
		action.payload.title = 'React'
	}
	next(action)
}

export const store = configureStore({
	reducer: {
		todoList: todoReducer,
		filter: filterReducer,
		theme: themeReducer,
	},
	// middleware: getDefaultMiddleware =>
	// 	getDefaultMiddleware().concat(myFilterMiddleware),
	devTools: process.env.NODE_ENV !== 'production',
})
