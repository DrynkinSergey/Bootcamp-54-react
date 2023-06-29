import React, { createContext, useState } from 'react'
import { GitRepos } from './components/GitRepos/GitRepos'
import { Counter } from './components/Counter/Counter'
import { TodoList } from './components/TodoList/TodoList'
import { ContextProvider } from './HOC/ContextProvider'

export const App = () => {
	return (
		<>
			<GitRepos />
		</>
	)
}
