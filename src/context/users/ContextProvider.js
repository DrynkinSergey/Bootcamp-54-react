import React, { useReducer } from 'react'
import { UserContext } from './context'
import { userReducer } from './reducer'

export const ContextProvider = ({ children }) => {
	const initialState = {
		users: [],
		type: 'ASC',
		positions: ['Developer', 'CEO', 'CTO', 'QA', 'Mentor'],
	}
	const [state, dispatch] = useReducer(userReducer, initialState)
	const contextValue = {
		state,
		dispatch,
	}
	return (
		<UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
	)
}
