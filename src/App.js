import React, { createContext, useState } from 'react'
import { GitRepos } from './components/GitRepos/GitRepos'
import { Counter } from './components/Counter/Counter'
import { TodoList } from './components/TodoList/TodoList'

export const App = () => {
	return (
		<>
			<GitRepos />
			<TodoList />
		</>
	)
}
