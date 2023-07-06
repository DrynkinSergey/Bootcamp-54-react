import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'
import { selectFilter, selectTodos } from '../redux/todoList/selectors'
import {
	addTodo,
	deleteMarked,
	deleteTodo,
	setFilter,
	toggleTodo,
} from '../redux/todoList/slice'
import { changeUserName } from '../redux/userSlice'

export const TodoList = () => {
	const dispatch = useDispatch()
	const todos = useSelector(selectTodos)
	const filter = useSelector(selectFilter)
	const [value, setValue] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		if (value) {
			dispatch(addTodo(value))
			setValue('')
		}
	}

	const handleDelete = id => {
		dispatch(deleteTodo(id))
		dispatch(changeUserName('ALEX'))
	}
	const handleToggleTodo = id => {
		dispatch(toggleTodo(id))
	}
	const handleDeletMarked = () => {
		dispatch(deleteMarked())
	}

	const getFilteredData = () => {
		switch (filter) {
			case 'Active':
				return todos.filter(todo => !todo.completed)
			case 'Completed':
				return todos.filter(todo => todo.completed)

			default:
				return todos
		}
	}
	const filteredData = getFilteredData()

	const setClasses = filterType => {
		return ` ${
			filter === filterType && 'bg-black/20'
		} border-2 hover:bg-black/20  px-4 py-2 border-black`
	}
	return (
		<div className=' min-h-screen flex  items-center flex-col'>
			<h1 className='text-4xl italic'>Todo list</h1>
			<form onSubmit={handleSubmit} className='flex gap-4 my-4 justify-center'>
				<input
					value={value}
					onChange={e => setValue(e.target.value)}
					className='border-2 px-4 py-2 border-black'
					type='text'
				/>
				<button className='border-2 hover:bg-black/20  px-4 py-2 border-black'>
					Add todo
				</button>
				<button
					onClick={handleDeletMarked}
					className='border-2 hover:bg-black/20  px-4 py-2 border-black'
				>
					Delete Marked
				</button>
			</form>
			<motion.ul className='w-full flex-col flex gap-4 justify-center'>
				<AnimatePresence>
					{filteredData.map(({ todo, id, completed }, idx) => (
						<motion.li
							initial={{ opacity: 0, x: idx % 2 === 0 ? 200 : -200 }}
							animate={{ opacity: 1, x: 0, y: 0 }}
							transition={{ duration: 0.5 }}
							exit={{ opacity: 0, scale: 0, x: idx % 2 === 0 ? -500 : 500 }}
							key={id}
							className='w-1/2 flex justify-between items-center mx-auto px-4 py-2 border-2 border-black'
						>
							<div>
								<input
									className='mx-4'
									type='checkbox'
									checked={completed}
									onChange={() => handleToggleTodo(id)}
								/>
								<span>{todo}</span>
							</div>
							<button
								onClick={() => handleDelete(id)}
								className='border-2 hover:bg-black/20  px-4 py-2 border-black'
							>
								Delete
							</button>
						</motion.li>
					))}
				</AnimatePresence>
			</motion.ul>
			<div className='flex gap-2 my-4'>
				<button
					onClick={() => dispatch(setFilter('All'))}
					className={setClasses('All')}
				>
					All
				</button>
				<button
					onClick={() => dispatch(setFilter('Active'))}
					className={setClasses('Active')}
				>
					Active
				</button>
				<button
					onClick={() => dispatch(setFilter('Completed'))}
					className={setClasses('Completed')}
				>
					Completed
				</button>
			</div>
		</div>
	)
}
