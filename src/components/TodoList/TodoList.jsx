import React, { Component } from 'react'
import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import todoData from './../../assets/todos.json'
export class TodoList extends Component {
	state = {
		tasks: todoData,
		inputValue: '',
	}

	handleToggleTodo = id => {
		console.log(id)
		this.setState(prevState => ({
			tasks: prevState.tasks.map(task =>
				task.id === id ? { ...task, completed: !task.completed } : task
			),
		}))
	}

	handleDelete = id => {
		console.log(id)
		const newArray = this.state.tasks.filter(el => el.id !== id)
		// const a = [1, 2, 3, 5, 7, 8]
		// const newA = a.filter(item => item > 4)
		// console.log('before =>>', a)
		// console.log('after =>>', newA)
		this.setState({ tasks: newArray })
	}
	handleAddTodo = () => {
		console.log('Add')

		this.setState({
			tasks: [
				...this.state.tasks,
				{
					id: crypto.randomUUID(),
					todo: this.state.inputValue,
					completed: false,
				},
			],
		})
	}
	handleResetTodos = () => {
		this.setState({ tasks: [] })
	}

	render() {
		const { tasks, inputValue } = this.state
		return (
			<div>
				<StyledTodoList>
					<StyledInput
						type='text'
						value={inputValue}
						onChange={e => this.setState({ inputValue: e.target.value })}
					/>
					<StyledButton onClick={this.handleAddTodo}>Add</StyledButton>
					{tasks.map(item => (
						<StyledTodo key={item.id}>
							<input
								type='checkbox'
								checked={item.completed}
								onChange={() => this.handleToggleTodo(item.id)}
							/>
							<span>{item.todo}</span>
							<StyledButton
								size='18px'
								onClick={() => this.handleDelete(item.id)}
							>
								Delete
							</StyledButton>
						</StyledTodo>
					))}
					<button onClick={this.handleResetTodos}>Clear</button>
				</StyledTodoList>
			</div>
		)
	}
}

// export const TodoList = () => {
// return (
// 	<div>
// 		<StyledTodoList>
// 			<StyledInput type='text' />
// 			<StyledButton>Add</StyledButton>
// 			{[].map(item => (
// 				<StyledTodo>
// 					<input type='checkbox' />
// 					<span>todo</span>
// 					<StyledButton size='18px'>Delete</StyledButton>
// 				</StyledTodo>
// 			))}
// 			<button>Clear</button>
// 		</StyledTodoList>
// 	</div>
// )
// }
