import React, { useState } from 'react'
import { loginThunk } from '../redux/auth/operations'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { selectLoggedIn } from '../redux/auth/selectors'

export const LoginPage = () => {
	const dispatch = useDispatch()
	const location = useLocation()
	const isLoggedIn = useSelector(selectLoggedIn)
	console.log(location)

	const [credentials, setCredentials] = useState({
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
		dispatch(loginThunk(credentials))
			.unwrap()
			.then(() => toast.success(`Welcome back!`))
			.catch(() => toast.error(`Server is dead!`))
	}
	if (isLoggedIn) {
		return <Navigate to={location.state?.from ?? '/'} />
	}
	return (
		<div className='flex justify-center items-center min-h-screen'>
			<form
				onSubmit={handleSubmit}
				className='flex   rounded-md shadow-md flex-col gap-4 px-8 py-4 border-2 border-black bg-darkMain/70'
			>
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
				<button className='border-2 mt-4 border-white text-white'>Login</button>
				<hr />
				<h2>
					If you dont have account go to{' '}
					<Link className='text-blue-500' to='/register'>
						Register
					</Link>
				</h2>
			</form>
		</div>
	)
}
