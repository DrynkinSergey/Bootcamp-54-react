import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	clearToken,
	instance,
	instanceJsonPH,
	setToken,
} from '../../config/usersInstance'

export const registerThunk = createAsyncThunk(
	'auth/reg',
	async (credentials, { rejectWithValue }) => {
		try {
			const { data } = await instance.post('users/signup', credentials)
			console.log(data)
			setToken(data.token)
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)
// export const loginThunk = createAsyncThunk(
// 	'auth/login',
// 	(credentials, { rejectWithValue }) => {
// 		instanceJsonPH.get('todos/').then(res => console.log(res.data))
// 		instance.post('users/login', credentials).then(res => console.log(res.data))
// 	}
// )
export const loginThunk = createAsyncThunk(
	'auth/login',
	async (credentials, { rejectWithValue }) => {
		try {
			const { data } = await instance.post('users/login', credentials)
			const jsonRes = await instanceJsonPH.get('todos')
			console.log(jsonRes)
			setToken(data.token)
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)
export const logoutThunk = createAsyncThunk(
	'auth/logout',
	async (_, { rejectWithValue }) => {
		await instance.post('users/logout')
		clearToken()
		try {
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)

export const refreshThunk = createAsyncThunk(
	'auth/refresh',

	async (_, { rejectWithValue, getState }) => {
		const persistedToken = getState().auth.token
		if (!persistedToken) {
			return rejectWithValue('Token is not find!')
		}
		try {
			setToken(persistedToken)
			const { data } = await instance.get('users/me')
			console.log(data)
			return data
		} catch (error) {
			console.log(error)
			return rejectWithValue(error.message)
		}
	}
)
