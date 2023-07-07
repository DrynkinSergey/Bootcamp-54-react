export const selectUserInfo = state => state.auth.user
export const selectIsLoggedIn = state => state.auth.isLoggedIn

export const selectUsers = state => state.userList.users
export const selectOneUser = (state, id) => {
	return state.userList.users.find(user => user.id === id)
}
