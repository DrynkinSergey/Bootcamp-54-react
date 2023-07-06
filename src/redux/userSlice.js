import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	user: {
		name: 'Stepan',
		age: 37,
	},
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		changeUserName: (state, action) => {
			state.user.name = action.payload
		},
	},
})
export const { changeUserName } = userSlice.actions
export const userReducer = userSlice.reducer
