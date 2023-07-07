import React from 'react'
import { Form } from '../components/Form'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editUser } from '../redux/usersSlice'
import { Wrapper } from './AddUserPage'

export const EditPage = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleSubmit = ({ e, newUser }) => {
		e.preventDefault()
		dispatch(editUser({ id, newUser }))
		navigate('/dashboard')
		//without prepare
		// dispatch(addUser({ ...newUser, id: nanoid() }))
	}
	return (
		<Wrapper>
			<Form handleSubmit={handleSubmit} id={id} title='Edit' />
		</Wrapper>
	)
}
