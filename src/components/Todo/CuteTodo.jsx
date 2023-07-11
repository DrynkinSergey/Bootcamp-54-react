import React, { useEffect, useMemo } from 'react'
import bg from './../../assets/images/bg-desktop-dark.jpg'
import bgMobile from './../../assets/images/bg-mobile-dark.jpg'
import { AddForm } from './AddForm'
import { TodoList } from './todoList'
import { useDispatch, useSelector } from 'react-redux'
import { Filter } from './Filter'
import { selectTheme } from '../../redux/todoList/selectors'
import { toggleTheme } from '../../redux/themeSlice'

export const CuteTodo = () => {
	const dispatch = useDispatch()
	const theme = useSelector(selectTheme)

	const bgImage = useMemo(
		() => (
			<>
				<img
					className='absolute hidden md:block w-full h-1/2 object-cover left-0 z-1'
					src={bg}
					alt='bgImage'
				/>
				<img
					className='fixed md:hidden block w-full h-1/2 object-cover left-0 z-1'
					src={bgMobile}
					alt='bgImage'
				/>
			</>
		),

		[]
	)
	return (
		<div
			className={` ${
				theme === 'dark' ? 'bg-darkVeryBG' : 'bg-white'
			} min-h-screen px-6 text-lg`}
		>
			{bgImage}
			<div className='relative z-2 flex w-full  sm:w-3/4 md:w-3/4 lg:w-2/3 xl:w-2/4 flex-col mx-auto py-40 '>
				<span className=' flex justify-between   font-extrabold mb-8 text-2xl text-white/80'>
					TODO:
					<button
						onClick={() => dispatch(toggleTheme())}
						className='border-2 border-white px-4 py-2 rounded-md'
					>
						{theme}
					</button>
				</span>
				<AddForm />
				<TodoList />
				<Filter />
			</div>
		</div>
	)
}
