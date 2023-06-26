import React, { Component } from 'react'
import { GitHeader } from './GitHeader'
import { GitReposList } from './GitReposList'
import { repos } from '../../assets/repos'
export class GitRepos extends Component {
	render() {
		return (
			<div>
				<GitHeader />
				<GitReposList repos={repos} />
			</div>
		)
	}
}
