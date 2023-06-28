import React, { Component } from 'react'
import { StyledCard, StyledRepoImg } from './GitRepos.styled'
import { Modal } from '../Modal/Modal'

export class GitReposListItem extends Component {
	state = {
		isOpen: false,
	}
	toggleModal = () => {
		this.setState(prev => ({ isOpen: !prev.isOpen }))
	}
	render() {
		const { name, desc, language, url, author, stars, link } = this.props
		const { isOpen } = this.state
		return (
			<StyledCard>
				<StyledRepoImg onClick={this.toggleModal}>
					<img src={url} alt='userImg' />
				</StyledRepoImg>
				<div>
					<h2>Name: {name}</h2>
					<h3>Author: {author}</h3>
					<h3>Language: {language}</h3>
					<h3>Description: {desc}</h3>
				</div>
				<div>
					<span>{stars} stars</span>
				</div>
				<div>
					<a href={link} target='_blank ' rel='noreferrer'>
						link
					</a>
				</div>
				{isOpen ? (
					<Modal onClose={this.toggleModal}>
						<img src={url} alt='userImg' />
					</Modal>
				) : null}
			</StyledCard>
		)
	}
}
