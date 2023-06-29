import React, { useState } from 'react'
import { GitRepos } from './components/GitRepos/GitRepos'
import { Counter } from './components/Counter/Counter'
import { TodoList } from './components/TodoList/TodoList'

export const App = () => {
	const [user, setUser] = useState('Alex')
	return (
		<div>
			<GitRepos />
		</div>
	)
}
