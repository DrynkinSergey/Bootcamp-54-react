import React, { useReducer } from 'react'
import { UserContext } from './context/UserContext'
import { userReducer } from './reducer/reducer'

export const ContextProvider = ({ children }) => {
	const initialState = {
		users: [
			{
				name: 'SERG',
				position: 'Developer',
				id: '866854d1-9513-4f76-9e23-86c0d5c25c47',
			},
		],
	}
	//Створюємо стейт та діспатч
	const [state, dispatch] = useReducer(userReducer, initialState)

	const contextValue = {
		state,
		dispatch,
	}
	return (
		<UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
	)
}
