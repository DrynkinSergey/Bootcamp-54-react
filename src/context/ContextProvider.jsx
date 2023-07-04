import React, { createContext, useState } from 'react'

export const AuthContext = createContext()
export const ContextProvider = ({ children }) => {
	const [user, setUser] = useState()
	const login = (userName, cb = () => {}) => {
		setUser(userName)
		cb()
	}
	const logout = () => {
		setUser()
	}
	const contextValue = {
		login,
		logout,
		user,
	}
	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	)
}
