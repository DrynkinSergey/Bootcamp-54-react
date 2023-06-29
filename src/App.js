import React, { createContext, useContext, useState } from 'react'
import { GitRepos } from './components/GitRepos/GitRepos'
import { Counter } from './components/Counter/Counter'
import { TodoList } from './components/TodoList/TodoList'
import { ContextProvider, loginContext } from './HOC/ContextProvider'
import { Test } from './components/Test/Test'

export const App = () => {
	const context = useContext(loginContext)
	const [propsAuto, setPropsAuto] = useState('Zil 130')
	console.log(context)
	return (
		<>
			<Test propsAuto={propsAuto} setPropsAuto={setPropsAuto} />
		</>
	)
}
