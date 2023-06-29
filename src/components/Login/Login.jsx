import React, { useContext } from 'react'
import {
	StyledInput,
	StyledLabel,
	StyledLoginForm,
	StyledTitle,
} from '../RegisterForm/RegisterForm.styled'
import { FlexContainer } from '../Counter/Counter.styled'
import { loginContext } from '../../HOC/ContextProvider'

export const Login = () => {
	const handleSubmit = e => {
		e.preventDefault()
	}
	const { setName, setEmail, setLogin } = useContext(loginContext)
	return (
		<FlexContainer>
			<StyledLoginForm onSubmit={handleSubmit}>
				<StyledTitle>Login</StyledTitle>
				<StyledLabel>
					Name:
					<StyledInput
						type='text'
						id='inputName'
						name='username'
						onChange={e => setName(e.target.value)}
					/>
				</StyledLabel>
				<br />
				<StyledLabel>
					Email:
					<StyledInput
						type='email'
						name='email'
						onChange={e => setEmail(e.target.value)}
					/>
				</StyledLabel>
				<br />
				<StyledLabel>
					Password:
					<StyledInput type='password' name='password' />
				</StyledLabel>
				<br />
				<button onClick={setLogin}>Login</button>
			</StyledLoginForm>
		</FlexContainer>
	)
}
