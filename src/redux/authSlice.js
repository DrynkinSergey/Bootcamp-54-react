import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
	user: {
		name: '',
		email: '',
	},
	isLoggedIn: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, { payload }) => {
			if (payload.username !== 'admin' || payload.email !== 'admin@mail.com') {
				toast.error('You havent access')
				return
			}
			state.user = payload
			state.isLoggedIn = true
		},
		logout: state => {
			state.user = {
				name: '',
				email: '',
			}
			state.isLoggedIn = false
		},
	},
})

export const { login, logout } = authSlice.actions
export const authReducer = authSlice.reducer
