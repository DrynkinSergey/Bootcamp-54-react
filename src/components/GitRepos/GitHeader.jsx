import React from 'react'
import { StyledHeader } from './GitRepos.styled'

export const GitHeader = () => {
	return (
		<StyledHeader>
			<h1>Welcome to GitRepos</h1>
			<form>
				<input type='text' name='search' placeholder='Enter repo name...' />
				<button>Search</button>
			</form>
		</StyledHeader>
	)
}
