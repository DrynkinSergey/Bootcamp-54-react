import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { loginThunk, logoutThunk, registerThunk } from './operations'

const pending = (state, action) => {
	state.loading = true
	state.error = ''
}
const rejected = (state, action) => {
	state.loading = false
	state.error = action.payload
}
const initialState = {
	user: {
		name: '',
		email: '',
	},
	token: '',
	error: null,
	loading: false,
	isLoggedIn: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(logoutThunk.fulfilled, (state, action) => {
				state.user = {
					name: '',
					email: '',
				}
				state.token = ''
				state.isLoggedIn = false
			})
			.addMatcher(isAnyOf(loginThunk.pending, registerThunk.pending), pending)
			.addMatcher(
				isAnyOf(loginThunk.rejected, registerThunk.rejected),
				rejected
			)
			.addMatcher(
				isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
				(state, action) => {
					state.user = action.payload.user
					state.token = action.payload.token
					state.isLoggedIn = true
					state.loading = false
				}
			)
	},
})

export const authReducer = authSlice.reducer
