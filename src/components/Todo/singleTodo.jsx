import { useDispatch } from 'react-redux'
import icon from '../../assets/images/icon-check.svg'
import { deleteTodo, toggleTodo } from '../../redux/todoList/slice'
import {
	deleteTodoThunk,
	toggleTodoThunk,
} from '../../redux/todoList/operations'
export const SingleTodo = ({ id, title, completed }) => {
	const dispatch = useDispatch()

	const stylesActive = completed
		? 'bg-gradient-to-br from-checkboxFrom to-checkboxTo'
		: ''

	return (
		<li className='group  list-none cursor-pointer  py-4  border-b-white/10 border-b-[1px] text-white/80 grid   grid-cols-todo items-center'>
			<label
				onClick={() => dispatch(toggleTodoThunk({ id, completed }))}
				className='relative inline-block cursor-pointer'
			>
				<span
					className={`${stylesActive} absolute h-5 w-5 flex items-center justify-center  left-4 top-[-10px] rounded-full border-white/20 border-[1px]`}
				>
					{completed && <img src={icon} alt='' />}
				</span>
			</label>
			<span
				className={
					completed
						? 'line-through text-white/20 transition-all'
						: 'transition-all'
				}
			>
				{title}
			</span>
			<button
				onClick={() => dispatch(deleteTodoThunk(id))}
				className=' transition-all hidden text-white/20 hover:text-white  group-hover:block mx-auto'
			>
				X
			</button>
		</li>
	)
}
