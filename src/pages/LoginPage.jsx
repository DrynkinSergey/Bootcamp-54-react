import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../redux/selectors'
import { Navigate } from 'react-router-dom'
import { login } from '../redux/authSlice'

export const LoginPage = () => {
	const dispatch = useDispatch()
	const [userInfo, setUserInfo] = useState({
		username: '',
		email: '',
	})
	const { username, email } = userInfo
	const isLoggedIn = useSelector(selectIsLoggedIn)

	const handleChange = ({ target }) => {
		setUserInfo(prev => ({
			...prev,
			[target.name]: target.value,
		}))
	}

	const onSubmit = e => {
		e.preventDefault()
		dispatch(login(userInfo))
	}

	if (isLoggedIn) {
		return <Navigate to='/' />
	}
	return (
		<div>
			LoginPage
			<form onSubmit={onSubmit}>
				<input
					type='text'
					name='username'
					value={username}
					onChange={handleChange}
					placeholder='username'
				/>

				<input
					type='text'
					name='email'
					value={email}
					onChange={handleChange}
					placeholder='email'
				/>
				<button>Login</button>
				<button>Cancel</button>
			</form>
		</div>
	)
}
