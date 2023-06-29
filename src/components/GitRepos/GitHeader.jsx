import React, { Component, useState } from 'react'
import { StyledHeader } from './GitRepos.styled'
import { Modal } from '../Modal/Modal'
import { Login } from '../Login/Login'

export const GitHeader = ({ handleChangeQuery }) => {
	const [value, setValue] = useState('')
	const [isOpen, setIsOpen] = useState(false)

	const toggleModal = () => {
		setIsOpen(prev => !prev)
		// this.setState(prev => ({ isOpen: !prev.isOpen }))
	}
	const handleChangeValue = e => {
		setValue(e.target.value)
	}
	const handleSubmit = e => {
		e.preventDefault()
		handleChangeQuery(value)
		setValue('')
	}

	return (
		<StyledHeader>
			<h1>Welcome to GitRepos</h1>
			<button onClick={toggleModal}>Login</button>
			{isOpen ? (
				<Modal onClose={toggleModal}>
					<Login />
				</Modal>
			) : null}
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={value}
					onChange={handleChangeValue}
					placeholder='Enter repo name...'
				/>
				<button>Search</button>
			</form>
		</StyledHeader>
	)
}
