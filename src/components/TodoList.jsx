import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../redux/todoList/actions'

export const TodoList = () => {
	const [value, setValue] = useState('')
	const { tasks } = useSelector(state => state.todoList)
	const dispatch = useDispatch()
	const handleSubmit = e => {
		e.preventDefault()
		dispatch(addTodo(value))
		setValue('')
	}
	return (
		<div className='text-4xl w-full flex items-center flex-col'>
			<h1 className='text-4xl font-bold text-center'>
				The best Todo list ever
			</h1>
			<form onSubmit={handleSubmit} className='flex gap-2 my-4'>
				<input
					className='border-2 border-black px-4 py-2 rounded-md'
					type='text'
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
				<button className='border-2 border-black px-4 py-2 rounded-md hover:bg-black/70 hover:text-white'>
					Add
				</button>
			</form>
			<ul className='flex flex-col w-full gap-4 my-4 justify-center items-center'>
				{tasks.map((todo, idx) => (
					<li
						className='border-2  shadow-lg shadow-black/50 rounded-md flex items-center justify-between border-black w-1/2 px-4 py-4'
						key={todo.id}
					>
						{idx + 1}.{todo.todo}{' '}
						<button
							className='border-2 border-black px-4 py-2 rounded-xl transition-all duration-300 hover:bg-black/70 hover:text-white'
							onClick={() => dispatch(deleteTodo(todo.id))}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
