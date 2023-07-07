import { combineReducers } from 'redux'
import { authReducer } from './authSlice'
import { usersReducer } from './usersSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
	key: 'auth',
	version: 1,
	storage,
}
const usersConfig = {
	key: 'users',
	version: 1,
	storage,
}

export const root = combineReducers({
	auth: persistReducer(persistConfig, authReducer),
	userList: persistReducer(usersConfig, usersReducer),
})
