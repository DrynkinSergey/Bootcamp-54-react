import { SingleTodo } from './singleTodo'

import { useGetTodosQuery } from '../../redux/todoApi'

export const TodoList = () => {
	const { data: todos, isLoading, isError } = useGetTodosQuery()
	const ViewData = () =>
		todos.map(todo => <SingleTodo key={todo.id} {...todo} />).reverse()

	return (
		<div className='font-josefin bg-darkMain shadow-mainDark'>
			<ul className='rounded-md overflow-hidden'>
				{isLoading ? <h1>Loading...</h1> : <ViewData />}
			</ul>
		</div>
	)
}
