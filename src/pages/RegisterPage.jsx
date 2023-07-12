import React, { useState } from 'react'
import { registerThunk } from '../redux/auth/operations'
import { useDispatch } from 'react-redux'

export const RegisterPage = () => {
	const dispatch = useDispatch()
	const [credentials, setCredentials] = useState({
		name: '',
		email: '',
		password: '',
	})
	const handleChangeInput = ({ target }) => {
		const { name, value } = target
		setCredentials(prev => ({
			...prev,
			[name]: value,
		}))
	}
	const handleSubmit = e => {
		e.preventDefault()
		console.log(credentials)
		dispatch(registerThunk(credentials))
	}
	return (
		<div className='flex justify-center items-center min-h-screen'>
			<form
				onSubmit={handleSubmit}
				className='flex   rounded-md shadow-md flex-col gap-4 px-8 py-4 border-2 border-black bg-darkMain/70'
			>
				<label className='flex flex-col gap-2'>
					<span>Name</span>
					<input
						value={credentials.name}
						name='name'
						onChange={handleChangeInput}
						type='text'
						placeholder='Enter your name...'
						className='px-4 py-2 '
					/>
				</label>
				<label className='flex flex-col gap-2'>
					<span>Email</span>
					<input
						value={credentials.email}
						name='email'
						onChange={handleChangeInput}
						type='text'
						placeholder='Enter your email...'
						className='px-4 py-2 '
					/>
				</label>
				<label className='flex flex-col gap-2'>
					<span>Password</span>
					<input
						value={credentials.password}
						name='password'
						onChange={handleChangeInput}
						type='password'
						placeholder='Enter your password...'
						className='px-4 py-2 '
					/>
				</label>
				<button className='border-2 mt-4 border-white text-white'>
					Register
				</button>
			</form>
		</div>
	)
}
