import { SingleTodo } from './singleTodo'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { selectTodos } from '../../redux/todoList/selectors'

export const TodoList = () => {
	const todos = useSelector(selectTodos)
	const dispatch = useDispatch()
	useEffect(() => {}, [dispatch])
	const ViewData = () =>
		todos.map(todo => <SingleTodo key={todo.id} {...todo} />).reverse()

	return (
		<div className='font-josefin bg-darkMain shadow-mainDark'>
			<ul className='rounded-md overflow-hidden'>
				<ViewData />
			</ul>
		</div>
	)
}
