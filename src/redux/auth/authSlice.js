import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { loginThunk, registerThunk } from './operations'

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
			.addCase(loginThunk.fulfilled, (state, action) => {
				state.user = action.payload.user
				state.token = action.payload.token
				state.isLoggedIn = true
				state.loading = false
			})
			.addMatcher(isAnyOf(loginThunk.pending, registerThunk.pending), pending)
			.addMatcher(
				isAnyOf(loginThunk.rejected, registerThunk.rejected),
				rejected
			)
	},
})

export const authReducer = authSlice.reducer
