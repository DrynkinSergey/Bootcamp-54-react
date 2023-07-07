import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = {
	users: [],
}

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		addUser: {
			prepare: newUser => {
				return {
					payload: {
						...newUser,
						id: nanoid(),
						edited: false,
					},
				}
			},
			reducer: (state, action) => {
				state.users.push(action.payload)
			},
		},
		deleteUser: (state, action) => {
			const index = state.users.findIndex(user => user.id === action.payload)
			state.users.splice(index, 1)
		},
		editUser: (state, { payload }) => {
			let index = state.users.findIndex(user => user.id === payload.id)
			state.users.splice(index, 1, payload.newUser)
		},
	},
})

export const { addUser, deleteUser, editUser } = usersSlice.actions
export const usersReducer = usersSlice.reducer
