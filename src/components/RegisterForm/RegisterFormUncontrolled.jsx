import React from 'react'
import {
	StyledInput,
	StyledLabel,
	StyledLoginForm,
	StyledTitle,
} from './RegisterForm.styled'
import { StyledButton } from '../Counter/Counter.styled'
export const RegisterFormUncontrolled = () => {
	return (
		<StyledLoginForm>
			<StyledTitle>Register</StyledTitle>
			<StyledLabel>
				Name:
				<StyledInput type='text' />
			</StyledLabel>
			<br />
			<StyledLabel>
				Email:
				<StyledInput type='text' />
			</StyledLabel>
			<br />

			<StyledLabel>
				Password:
				<StyledInput type='password' />
			</StyledLabel>

			<br />
			<StyledButton>Register</StyledButton>
		</StyledLoginForm>
	)
}
