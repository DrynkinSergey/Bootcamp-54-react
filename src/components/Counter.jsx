import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	changeStep,
	decrement,
	increment,
	reset,
} from '../redux/counter/actions'
import { selectCounter } from '../redux/counter/selectors'

export const Counter = () => {
	const counter = useSelector(selectCounter)
	// const counter = useSelector(state => state.counter)
	const dispatch = useDispatch()
	const [value, setValue] = useState()
	const changeInput = value => {
		setValue(value)
		dispatch(changeStep(value))
	}
	return (
		<div className='text-4xl text-white px-4 py-4 text-center flex justify-center items-center flex-col min-h-screen'>
			<h1 className='text-black mb-6'>Counter Tailwind</h1>
			<div className='w-[500px] mx-auto h-[400px] flex justify-center items-center flex-col bg-black/80 rounded-lg'>
				<input
					className='text-black'
					type='number'
					value={value}
					onChange={e => changeInput(e.target.value)}
				/>
				<span className='my-6 text-6xl font-bold'>{counter}</span>
				<div className='flex gap-4 justify-center'>
					<button
						onClick={() => dispatch(decrement())}
						className='border-2 border-white px-6 py-2 rounded-xl hover:bg-black/50 hover:text-white'
					>
						Minus
					</button>
					<button
						onClick={() => dispatch(reset())}
						className='border-2 border-white px-6 py-2 rounded-xl hover:bg-black/50 hover:text-white'
					>
						Reset
					</button>
					<button
						onClick={() => dispatch(increment())}
						className='border-2 border-white px-6 py-2 rounded-xl hover:bg-black/50 hover:text-white'
					>
						Plus
					</button>
				</div>
			</div>
		</div>
	)
}
