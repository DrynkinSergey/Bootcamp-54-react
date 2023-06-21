import React from 'react'
import {
	StyledInput,
	StyledLabel,
	StyledLoginForm,
	StyledTitle,
} from './RegisterForm.styled'
import { FlexContainer, StyledButton } from '../Counter/Counter.styled'

export const RegisterForm = () => {
	return (
		<FlexContainer>
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
		</FlexContainer>
	)
}
