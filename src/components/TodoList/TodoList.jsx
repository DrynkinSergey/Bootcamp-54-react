import React, { Component, useEffect, useState } from 'react'
import { StyledButton } from '../Counter/Counter.styled'
import { StyledInput, StyledTodo, StyledTodoList } from './TodoList.styled'
import { toast } from 'react-toastify'
import { getAllTodos } from '../../services/api'

export const TodoList = () => {
	const [tasks, setTasks] = useState([])
	const [inputValue, setInputValue] = useState('')
	const [page, setPage] = useState(1)
	useEffect(() => {
		const getData = async () => {
			try {
				const { data } = await getAllTodos({
					_page: page,
				})
				console.log(data)

				// this.setState(prevState => ({
				// 	tasks: [...prevState.tasks, ...data],
				// }))
				setTasks(prev => [...prev, ...data])
			} catch (error) {
				console.log(error)
				toast.error('Try again...')
			}
		}
		getData()
	}, [page])

	const handleLoadMore = () => {
		// this.setState(prevState => ({ page: prevState.page + 1 }))

		setPage(prev => prev + 1)
	}

	const handleToggleTodo = id => {
		console.log(id)
		// this.setState(prevState => ({
		// tasks: prevState.tasks.map(task =>
		// 	task.id === id ? { ...task, completed: !task.completed } : task
		// ),
		// }))
		setTasks(prev =>
			prev.map(task =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		)
	}

	const handleDelete = id => {
		console.log(id)
		// const newArray = this.state.tasks.filter(el => el.id !== id)
		// this.setState({ tasks: newArray })
		const newArray = tasks.filter(el => el.id !== id)
		setTasks(newArray)
	}
	const handleAddTodo = () => {
		console.log('Add')
		setTasks(prev => {
			return [
				...prev,
				{
					id: crypto.randomUUID(),
					title: inputValue,
					completed: false,
				},
			]
		})
		// this.setState({
		// 	tasks: [
		// 		...this.state.tasks,
		// {
		// 	id: crypto.randomUUID(),
		// 	todo: this.state.inputValue,
		// 	completed: false,
		// },
		// 	],
		// })
	}
	return (
		<div>
			<StyledTodoList>
				<StyledInput
					type='text'
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				/>
				<StyledButton onClick={handleAddTodo}>Add</StyledButton>
				{tasks.map(item => (
					<StyledTodo key={item.id}>
						<input
							type='checkbox'
							checked={item.completed}
							onChange={() => handleToggleTodo(item.id)}
						/>
						<span>{item.title}</span>
						<StyledButton size='18px' onClick={() => handleDelete(item.id)}>
							Delete
						</StyledButton>
					</StyledTodo>
				))}
				<button onClick={handleLoadMore}>Load More</button>
			</StyledTodoList>
		</div>
	)
}

// export class TodoList extends Component {
// 	state = {
// 		tasks: [],
// 		inputValue: '',
// 		page: 1,
// 	}
// 	componentDidMount() {
// 		this.getData()
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		const { page } = this.state
// 		if (page !== prevState.page) {
// 			this.getData()
// 			toast.info('Data was update')
// 		}
// 	}

// getData = async () => {
// 	const { page } = this.state
// 	try {
// 		const { data } = await getAllTodos({
// 			_page: page,
// 		})
// 		console.log(data)

// 		this.setState(prevState => ({
// 			tasks: [...prevState.tasks, ...data],
// 		}))
// 	} catch (error) {
// 		console.log(error)
// 		toast.error('Try again...')
// 	}
// }

// handleLoadMore = () => {
// 	this.setState(prevState => ({ page: prevState.page + 1 }))
// }

// handleToggleTodo = id => {
// 	console.log(id)
// 	this.setState(prevState => ({
// 		tasks: prevState.tasks.map(task =>
// 			task.id === id ? { ...task, completed: !task.completed } : task
// 		),
// 	}))
// }

// handleDelete = id => {
// 	console.log(id)
// 	const newArray = this.state.tasks.filter(el => el.id !== id)

// 	this.setState({ tasks: newArray })
// }
// handleAddTodo = () => {
// 	console.log('Add')

// 	this.setState({
// 		tasks: [
// 			...this.state.tasks,
// 			{
// 				id: crypto.randomUUID(),
// 				todo: this.state.inputValue,
// 				completed: false,
// 			},
// 		],
// 	})
// }
// 	handleResetTodos = () => {
// 		this.setState({ tasks: [] })
// 	}

// 	render() {
// 		const { tasks, inputValue } = this.state
// 		return (
// 			<div>
// 				<StyledTodoList>
// 					<StyledInput
// 						type='text'
// 						value={inputValue}
// 						onChange={e => this.setState({ inputValue: e.target.value })}
// 					/>
// 					<StyledButton onClick={this.handleAddTodo}>Add</StyledButton>
// 					{tasks.map(item => (
// 						<StyledTodo key={item.id}>
// 							<input
// 								type='checkbox'
// 								checked={item.completed}
// 								onChange={() => this.handleToggleTodo(item.id)}
// 							/>
// 							<span>
// 								{item.id}.{item.title}
// 							</span>
// 							<StyledButton
// 								size='18px'
// 								onClick={() => this.handleDelete(item.id)}
// 							>
// 								Delete
// 							</StyledButton>
// 						</StyledTodo>
// 					))}
// 					<button onClick={this.handleLoadMore}>Load More</button>
// 				</StyledTodoList>
// 			</div>
// 		)
// 	}
// }
