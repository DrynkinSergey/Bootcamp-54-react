import logger from 'redux-logger'
import { todoReducer } from './todoList/slice'
import { configureStore } from '@reduxjs/toolkit'

const myFilterMiddleware = store => next => action => {
	console.log(action)
	if (action.payload?.title === 'Angular') {
		action.payload.title = 'НЕ РОБИ ЦЬОГО, НЕ ДИВИСЬ!'
	}
	next(action)
}

export const store = configureStore({
	reducer: {
		todoList: todoReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(myFilterMiddleware),
	devTools: process.env.NODE_ENV !== 'production',
})
