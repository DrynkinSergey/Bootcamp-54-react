import { counterReducer } from './counter/slice'
import { todoReducer } from './todoList/slice'
import { configureStore } from '@reduxjs/toolkit'
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
import { userReducer } from './userSlice'

const persistConfig = {
	key: 'todos',
	version: 1,
	storage,
	// blacklist: ['filter'],
	// whitelist: ['tasks'],
}

const persistedReducer = persistReducer(persistConfig, todoReducer)
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		todoList: persistedReducer,
		userInfo: userReducer,
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
