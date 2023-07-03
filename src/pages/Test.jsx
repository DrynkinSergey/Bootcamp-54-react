import React from 'react'

export const Test = () => {
	return (
		<div className=' min-h-screen'>
			Test
			<p className='text-indigo-500 md:text-green-500  xl:text-yellow-500 text-2xl underline hover:text-red-500'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis
				eligendi voluptatum, recusandae, labore corrupti harum a commodi cum
				consequuntur autem esse non, nesciunt quas hic consequatur? Recusandae,
				animi nemo?
			</p>
			<div className='flex gap-2 '>
				<div className='w-[150px] h-[150px] bg-cyan-500 py-10 '></div>
				<div className='w-[150px] h-[150px] bg-cyan-500 py-10 '></div>
				<div className='w-[150px] h-[150px] bg-cyan-500 py-10 '></div>
			</div>
		</div>
	)
}
