import { configureStore } from '@reduxjs/toolkit'
import { root } from './reducers'
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist'

export const store = configureStore({
	reducer: root,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})
export let persistor = persistStore(store)
