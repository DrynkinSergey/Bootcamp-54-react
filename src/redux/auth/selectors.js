import { createSelector } from '@reduxjs/toolkit'

export const selectLoggedIn = state => state.auth.isLoggedIn
export const selectIsRefresh = state => state.auth.isRefreshing
export const selectUserData = state => {
	console.log('USER DATA UPDATE')
	return state.auth.user
}

export const selectUser = createSelector([selectUserData], user => user)
