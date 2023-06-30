import React from 'react'
import { UserContext } from './UserContext'

export const ContextProvider = ({ children }) => {
	return <UserContext.Provider value={{}}>{children}</UserContext.Provider>
}
