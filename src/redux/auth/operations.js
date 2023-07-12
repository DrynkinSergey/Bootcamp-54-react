import { createAsyncThunk } from '@reduxjs/toolkit'
import { instance } from '../../config/usersInstance'

export const registerThunk = createAsyncThunk(
	'auth/reg',
	async (credentials, { rejectWithValue }) => {
		try {
			const { data } = await instance.post('users/signup', credentials)
			console.log(data)
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)
export const loginThunk = createAsyncThunk(
	'auth/login',
	async (credentials, { rejectWithValue }) => {
		try {
			const { data } = await instance.post('users/login', credentials)
			console.log(data)
			return data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	}
)
