import React from 'react'
import styled from 'styled-components'
import { StyledInput } from '../RegisterForm/RegisterForm.styled'

const skilsList = ['all', 'react', 'angular', 'vue']

export const EmployeesFilter = () => {
	return (
		<Filters>
			<h1>Filters</h1>
			<Flex>
				<StyledInput type='text' />
				<label htmlFor=''>
					<input type='checkbox' />
					<span> isAvailable</span>
				</label>
			</Flex>
			<Flex>
				{skilsList.map(radioButtonName => (
					<label key={radioButtonName}>
						<input
							name='radioButtonName'
							type='radio'
							value={radioButtonName}
						/>
						<span> {radioButtonName}</span>
					</label>
				))}
			</Flex>
		</Filters>
	)
}
const Filters = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #cbd3ff;
	font-weight: bold;
	font-size: 1.5rem;
	margin-bottom: 20px;
`
const Flex = styled.div`
	display: flex;
	padding: 20px 15px;
	gap: 10px;
	flex-direction: ${props => (props.column ? 'column' : 'row')};
`
