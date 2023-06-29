import React, { createContext, useState } from 'react'
export const loginContext = createContext()

export const ContextProvider = ({ children }) => {
	const [name, setName] = useState('Alex')
	const [email, setEmail] = useState('')
	const [login, setLogin] = useState(false)
	const array = [1, 2, 3, 4, 6]

	const value = {
		name,
		setName,
		email,
		setEmail,
		setLogin: () => setLogin(true),
		login,
		array,
		userInfo: {
			email: 'user@mail.com',
			address: {
				city: 'Kiev',
			},
		},
	}

	return <loginContext.Provider value={value}>{children}</loginContext.Provider>
}
