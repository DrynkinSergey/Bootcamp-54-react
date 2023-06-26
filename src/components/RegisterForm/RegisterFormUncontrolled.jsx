import React, { Component } from 'react'
import {
	StyledInput,
	StyledLabel,
	StyledLoginForm,
	StyledTitle,
} from './RegisterForm.styled'
import { FlexContainer, StyledButton } from '../Counter/Counter.styled'

export const RegisterFormUncontrolled = () => {
	const handleSubmit = e => {
		e.preventDefault()
		const form = e.target
		const name = form.name.value
		const password = form.password.value
		const email = form.email.value
		console.log({ name, password, email })
		form.reset()
	}
	return (
		<FlexContainer>
			<StyledLoginForm onSubmit={handleSubmit}>
				<StyledTitle>Register</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput type='text' name='name' />
				</StyledLabel>
				<br />
				<StyledLabel>
					Email:
					<StyledInput type='text' name='email' />
				</StyledLabel>
				<br />

				<StyledLabel>
					Password:
					<StyledInput type='password' name='password' />
				</StyledLabel>

				<br />
				<StyledButton>Register</StyledButton>
			</StyledLoginForm>
		</FlexContainer>
	)
}
