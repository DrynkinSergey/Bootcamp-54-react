import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counter/actions'

export const Counter = () => {
	const dispatch = useDispatch()
	const { counter } = useSelector(state => state.counter)
	return (
		<div className='min-h-screen flex items-center justify-center flex-col '>
			<h1 className='text-center text-4xl font-bold border-b-2'>
				Awesome Counter
			</h1>
			<div className='text-white rounded-xl bg-black/70 h-[400px] w-2/3 flex flex-col items-center px-8 py-4 justify-center'>
				<h1 className='text-4xl mb-8 font-bold'>{counter}</h1>
				<div className='flex gap-4'>
					<button
						onClick={() => dispatch(decrement())}
						className='p-2 border-2 hover:bg-white hover:text-black'
					>
						Minus
					</button>
					<button
						onClick={() => dispatch(reset())}
						className='p-2 border-2 hover:bg-white hover:text-black'
					>
						Reset
					</button>
					<button
						onClick={() => dispatch(increment())}
						className='p-2 border-2 hover:bg-white hover:text-black'
					>
						Plus
					</button>
				</div>
			</div>
		</div>
	)
}
