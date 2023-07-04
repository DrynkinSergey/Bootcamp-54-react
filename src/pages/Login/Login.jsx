import React, { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
	const { login } = useAuth()
	const navigate = useNavigate()
	const location = useLocation()
	console.log(location) // location{ ...., state:{from:location}}
	const [user, setUser] = useState('')
	const [password, setPassword] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		login(user, () => {
			console.log('LoggedIN >>>  ', user)
			navigate(location.state?.from || '/')
		})
	}
	return (
		<div>
			Login
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={user}
					onChange={e => setUser(e.target.value)}
					placeholder='Enter username...'
				/>
				<input
					type='password'
					value={password}
					onChange={e => setPassword(e.target.value)}
					placeholder='Enter password...'
				/>
				<button>Login</button>
			</form>
		</div>
	)
}

export default Login
