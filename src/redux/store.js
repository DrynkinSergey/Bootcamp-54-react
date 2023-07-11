import logger from 'redux-logger'
import { configureStore } from '@reduxjs/toolkit'
import { filterReducer } from './todoList/filterSlice'
import { themeReducer } from './themeSlice'
import { todoApi } from './todoApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

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
		[todoApi.reducerPath]: todoApi.reducer,
		filter: filterReducer,
		theme: themeReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(todoApi.middleware),
	devTools: process.env.NODE_ENV !== 'production',
})
setupListeners(store.dispatch)
