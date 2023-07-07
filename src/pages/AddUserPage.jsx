import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { styled } from 'styled-components'
import { addUser } from '../redux/usersSlice'
import { nanoid } from 'nanoid'
import { CustomInput } from '../components/CustomInput'
import { useNavigate } from 'react-router-dom'
import { Form } from '../components/Form'

export const AddUserPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSubmit = ({ e, newUser }) => {
		e.preventDefault()
		console.log(e, newUser)
		dispatch(addUser(newUser))
		navigate('/dashboard')
		//without prepare
		// dispatch(addUser({ ...newUser, id: nanoid() }))
	}
	return (
		<Wrapper>
			<Form handleSubmit={handleSubmit} title='Add ' />
		</Wrapper>
	)
}

export const Wrapper = styled.div`
	min-height: 100vh;
	display: grid;
	place-items: center;
`
