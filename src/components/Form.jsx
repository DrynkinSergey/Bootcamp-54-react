import React, { useState } from 'react'
import { CustomInput } from './CustomInput'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux'
import { selectOneUser } from '../redux/selectors'
const INIT_STATE = {
	name: '',
	position: '',
	salary: '',
	email: '',
	age: '',
}
export const Form = ({ handleSubmit, id, title }) => {
	const user = useSelector(state => selectOneUser(state, id))
	console.log(user)
	const [newUser, setNewUser] = useState(user ? { ...user } : INIT_STATE)

	const navigate = useNavigate()
	const inputsData = [
		{ name: 'name', value: newUser.name, type: 'text' },
		{ name: 'position', value: newUser.position, type: 'text' },
		{ name: 'email', value: newUser.email, type: 'email' },
		{ name: 'age', value: newUser.age, type: 'number' },
		{ name: 'salary', value: newUser.salary, type: 'number' },
	]
	const handleChangeInput = ({ target }) => {
		const { name, value } = target

		setNewUser(prev => ({
			...prev,
			[name]: value,
		}))
	}
	return (
		<FormStyled onSubmit={e => handleSubmit({ e, newUser })}>
			<h1>{title} User</h1>
			{inputsData.map((input, idx) => (
				<CustomInput
					key={idx}
					{...input}
					handleChangeInput={handleChangeInput}
				/>
			))}
			<button>Ok</button>
			<button onClick={() => navigate('/dashboard')}>Cancel</button>
		</FormStyled>
	)
}
const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
	border-radius: 12px;
	padding: 10px 15px;
	border: 2px solid black;
	width: 300px;
	box-shadow: 4px 4px 1px 1px rgba(0, 0, 0, 0.4);
`
