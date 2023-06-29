import React from 'react'
import {
	StyledInput,
	StyledLabel,
	StyledLoginForm,
	StyledTitle,
} from '../RegisterForm/RegisterForm.styled'
import { FlexContainer } from '../Counter/Counter.styled'

export const Login = () => {
	const handleSubmit = e => {
		e.preventDefault()
	}
	return (
		<FlexContainer>
			<StyledLoginForm onSubmit={handleSubmit}>
				<StyledTitle>Login</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput type='text' id='inputName' name='username' />
				</StyledLabel>
				<br />
				<StyledLabel>
					Email:
					<StyledInput type='email' name='email' />
				</StyledLabel>
				<br />
				<StyledLabel>
					Password:
					<StyledInput type='password' name='password' />
				</StyledLabel>
				<br />
				<button>Login</button>
			</StyledLoginForm>
		</FlexContainer>
	)
}
