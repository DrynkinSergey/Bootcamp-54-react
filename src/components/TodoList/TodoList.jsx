import React, { Component } from 'react'
import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import { getAllTodos } from '../../services/todoApi'
import { toast } from 'react-toastify'
export class TodoList extends Component {
	state = {
		tasks: [],
		inputValue: '',
		page: 1,
	}
	componentDidMount() {
		this.getData()
	}

	componentDidUpdate(prevProps, prevState) {
		const { page } = this.state
		if (page !== prevState.page) {
			this.getData()
			toast.info('Data was update')
		}
	}

	getData = async () => {
		const { page } = this.state
		try {
			const { data } = await getAllTodos({
				_page: page,
			})
			console.log(data)

			this.setState(prevState => ({
				tasks: [...prevState.tasks, ...data],
			}))
		} catch (error) {
			console.log(error)
			toast.error('Try again...')
		}
	}

	handleLoadMore = () => {
		this.setState(prevState => ({ page: prevState.page + 1 }))
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
							<span>
								{item.id}.{item.title}
							</span>
							<StyledButton
								size='18px'
								onClick={() => this.handleDelete(item.id)}
							>
								Delete
							</StyledButton>
						</StyledTodo>
					))}
					<button onClick={this.handleLoadMore}>Load More</button>
				</StyledTodoList>
			</div>
		)
	}
}
