import React from 'react'
import { StyledInput } from './TodoList.styled'
import { StyledButton } from '../Button'

export const AddTodoForm = ({ handleAddTodo, inputValue }) => {
	return (
		<>
			<StyledInput
				type='text'
				value={inputValue}
				onChange={e => this.setState({ inputValue: e.target.value })}
			/>
			<StyledButton onClick={handleAddTodo}>Add</StyledButton>
		</>
	)
}
