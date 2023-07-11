import { useDispatch, useSelector } from 'react-redux'
import {
	selectFilter,
	selectUncompletedTodo,
} from '../../redux/todoList/selectors'
import { setFilter } from '../../redux/todoList/filterSlice'
import { useGetTodosQuery } from '../../redux/todoApi'
import { useCallback, useMemo } from 'react'

export const Filter = () => {
	const { data } = useGetTodosQuery()
	const filter = useSelector(selectFilter)
	const dispatch = useDispatch()

	const selectUncompletedTodo = useCallback(() => {
		console.log('calc')
		if (data) {
			return data.reduce(
				(total, currentTodo) => (currentTodo.completed ? total : total + 1),
				0
			)
		}
	}, [data])

	const uncompletedTodo = useMemo(
		() => selectUncompletedTodo(),
		[selectUncompletedTodo]
	)

	const setClasses = type =>
		filter === type ? `${classes} text-blue-600` : classes
	const classes = 'hover:text-white cursor-pointer'
	return (
		<li className='bg-darkMain list-none  py-4 flex-col md:flex-row  text-white/40 flex justify-between px-8 items-center'>
			{uncompletedTodo === 0 ? (
				<span className='md:order-1 order-1'>All is complete!</span>
			) : (
				<span className='md:order-1 order-1'>
					<span className='text-blue-500'>{uncompletedTodo}</span> items left
				</span>
			)}
			<div className='flex gap-4 order-3 mt-4 md:mt-0  md:order-2'>
				<span
					onClick={() => dispatch(setFilter('All'))}
					className={setClasses('All')}
				>
					All
				</span>
				<span
					onClick={() => dispatch(setFilter('Active'))}
					className={setClasses('Active')}
				>
					Active
				</span>
				<span
					onClick={() => dispatch(setFilter('Completed'))}
					className={setClasses('Completed')}
				>
					Completed
				</span>
			</div>
		</li>
	)
}
