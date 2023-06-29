import React, { Component, useContext, useState } from 'react'
import { StyledCard, StyledRepoImg } from './GitRepos.styled'
import { Modal } from '../Modal/Modal'

export const GitReposListItem = ({
	name,
	desc,
	language,
	url,
	user,
	author,
	stars,
	link,
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleModal = () => {
		setIsOpen(prev => !prev)
		// this.setState(prev => ({ isOpen: !prev.isOpen }))
	}
	return (
		<StyledCard>
			<StyledRepoImg onClick={toggleModal}>
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
				<Modal onClose={toggleModal}>
					<img src={url} alt='userImg' />
				</Modal>
			) : null}
		</StyledCard>
	)
}
