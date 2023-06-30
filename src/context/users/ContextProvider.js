import React, { useReducer } from 'react'
import { UserContext } from './context/UserContext'
import { userReducer } from './reducer/reducer'

export const ContextProvider = ({ children }) => {
	const initialState = {
		users: [],
	}
	//Створюємо стейт та діспатч
	const [state, dispatch] = useReducer(userReducer, initialState)
	const positions = ['Developer', 'QA', 'CEO', 'Mentor', 'Cleaner', 'PM', 'HR']
	const contextValue = {
		state,
		dispatch,
		positions,
	}
	return (
		<UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
	)
}
