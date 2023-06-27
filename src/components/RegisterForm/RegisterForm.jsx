import React, { Component } from 'react'
import { INITIAL_STATE } from '../../helpers/constants'
import { FlexContainer, StyledButton } from '../Counter/Counter.styled'
import {
	StyledInput,
	StyledLabel,
	StyledLoginForm,
	StyledTitle,
} from './RegisterForm.styled'

export class RegisterForm extends Component {
	state = {
		...INITIAL_STATE,
	}
	handleSubmit = e => {
		e.preventDefault()
		console.log(this.state)
		this.setState(INITIAL_STATE)
	}

	handleChangeInput = ({ target }) => {
		const { name, value } = target
		this.setState({ [name]: value })
	}
	handleCheckboxChange = e => {
		this.setState({ agree: !this.state.agree })
	}
	handleChangeGender = e => {
		this.setState({ gender: e.target.value })
	}

	render() {
		const { age, username, email, password, agree, gender } = this.state
		return (
			<FlexContainer>
				<StyledLoginForm onSubmit={this.handleSubmit}>
					<StyledTitle>Register</StyledTitle>
					<StyledLabel>
						Name:
						<StyledInput
							type='text'
							name='username'
							value={username}
							onChange={this.handleChangeInput}
						/>
					</StyledLabel>
					<br />
					<StyledLabel>
						Email:
						<StyledInput
							type='email'
							name='email'
							value={email}
							onChange={this.handleChangeInput}
						/>
					</StyledLabel>
					<br />
					<StyledLabel>
						Password:
						<StyledInput
							type='password'
							name='password'
							value={password}
							onChange={this.handleChangeInput}
						/>
					</StyledLabel>
					<br />
					<StyledLabel>
						Age:
						<StyledInput
							type='number'
							name='age'
							value={age}
							onChange={this.handleChangeInput}
						/>
					</StyledLabel>
					<br />
					<StyledLabel>
						Agree:
						<StyledInput
							type='checkbox'
							name='checkbox'
							checked={agree}
							onChange={this.handleCheckboxChange}
						/>
					</StyledLabel>
					<br />
					<div>
						<input
							type='radio'
							name='radioButton'
							value='male'
							checked={'male' === gender}
							onChange={this.handleChangeGender}
						/>{' '}
						<span>Male</span>
						<input
							type='radio'
							name='radioButton'
							value='female'
							checked={'female' === gender}
							onChange={this.handleChangeGender}
						/>
						<span>Female</span>
						<input
							type='radio'
							name='radioButton'
							value='other'
							checked={'other' === gender}
							onChange={this.handleChangeGender}
						/>
						<span>Other</span>
					</div>
					<StyledButton disabled={!agree}>Register</StyledButton>
				</StyledLoginForm>
			</FlexContainer>
		)
	}
}
