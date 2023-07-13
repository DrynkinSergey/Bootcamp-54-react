import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logoutThunk } from '../redux/auth/operations'
import { selectLoggedIn, selectUser } from '../redux/auth/selectors'
import { instanceJsonPH } from '../config/usersInstance'

export const Navbar = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const user = useSelector(selectUser)
	const isLoggedIn = useSelector(selectLoggedIn)
	// const handleQuery = () => {
	// 	instanceJsonPH.get('/todos').then(res => console.log(res.data))
	// }
	return (
		<header className='flex justify-between px-6 py-4 bg-darkMain text-white font-bold'>
			<nav className='flex gap-4 '>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/todos'>Todos</NavLink>
				<NavLink to='/formik'>Formik</NavLink>
			</nav>
			<div>
				<h1>Hello {user.name}</h1>
			</div>
			<div className='flex gap-4'>
				{!isLoggedIn && (
					<>
						<button onClick={() => navigate('/login')}>Login</button>
						{/* <button onClick={handleQuery}>JSON</button> */}
					</>
				)}

				{!isLoggedIn && (
					<button onClick={() => navigate('/register')}>Register</button>
				)}
				{isLoggedIn && (
					<button
						onClick={() =>
							dispatch(logoutThunk())
								.unwrap()
								.then(() => navigate('/login'))
						}
					>
						Exit
					</button>
				)}
			</div>
		</header>
	)
}
