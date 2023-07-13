import { todoReducer } from './todoList/slice'
import { configureStore } from '@reduxjs/toolkit'
import { filterReducer } from './todoList/filterSlice'
import { themeReducer } from './themeSlice'
import { authReducer } from './auth/authSlice'

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
//StepanIsAwesome@mail.com
// https://goit-task-manager.herokuapp.com/

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	whitelist: ['token'],
}
const persistedReducer = persistReducer(persistConfig, authReducer)
export const store = configureStore({
	reducer: {
		todoList: todoReducer,
		auth: persistedReducer,
		filter: filterReducer,
		theme: themeReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	devTools: process.env.NODE_ENV !== 'production',
})
export const persistor = persistStore(store)
