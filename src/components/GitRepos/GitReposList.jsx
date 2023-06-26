import React from 'react'
import { GitReposListItem } from './GitReposListItem'
import { StyledRepoList } from './GitRepos.styled'

export const GitReposList = ({ repos = [] }) => {
	return (
		<StyledRepoList>
			{repos.map(repo => (
				<GitReposListItem
					key={repo.id}
					url={repo.owner.avatar_url}
					author={repo.owner.login}
					language={repo.language}
					name={repo.name}
					desc={repo.description}
					stars={repo.stargazers_count}
					link={repo.html_url}
				/>
			))}
		</StyledRepoList>
	)
}
