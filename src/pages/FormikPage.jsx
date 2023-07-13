import React, { useState } from 'react'

export const FormikPage = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		cash: '',
		country: 'Ukraine',
		terms: '',
	})
	const handleChangeInput = ({ target }) => {
		const { name, value } = target
		setFormData(prev => ({ ...prev, [name]: value }))
	}
	const handleSubmit = e => {
		e.preventDefault()
		console.log(formData)
	}
	return (
		// tailwind
		<div className='bg-darkMain min-h-screen flex justify-center items-center'>
			<form
				onSubmit={handleSubmit}
				className='text-white border-2 border-white/80 px-6 py-12 rounded-md flex flex-col gap-4'
			>
				<div>
					<label className='block mb-2'>Name:</label>
					<input
						className='text-black px-2 py-[1px] rounded-sm'
						type='text'
						name='name'
						value={formData.name}
						onChange={handleChangeInput}
						placeholder='Enter your name...'
					/>
				</div>
				<div>
					<label className='block mb-2'>Email:</label>
					<input
						className='text-black px-2 py-[1px] rounded-sm'
						type='text'
						name='email'
						onChange={handleChangeInput}
						value={formData.email}
						placeholder='Enter your email...'
					/>
				</div>
				<div>
					<label className='block mb-2'>Cash:</label>
					<input
						className='text-black px-2 py-[1px] rounded-sm'
						type='text'
						value={formData.cash}
						onChange={handleChangeInput}
						name='cash'
						placeholder='Enter your value'
					/>
				</div>
				<div>
					<label className='block mb-2'>Country:</label>

					<select
						onChange={handleChangeInput}
						value={formData.select}
						className='text-black w-full'
					>
						<option value='Ukraine'>Ukraine</option>
						<option value='USA'>USA</option>
						<option value='United Kingdom'>United Kingdom</option>
					</select>
				</div>
				<div>
					<input
						onChange={handleChangeInput}
						id='terms'
						className='px-2 py-[1px] mr-2 rounded-sm'
						type='checkbox'
						value={formData.terms}
						name='terms'
						placeholder='Enter your value'
					/>
					<label className=' mb-2' htmlFor='terms'>
						Terms of privacy:
					</label>
				</div>
				<button className='bg-white/80 text-black px-2 py-2 rounded-md hover:bg-white/50'>
					Donate
				</button>
			</form>
		</div>
	)
}
