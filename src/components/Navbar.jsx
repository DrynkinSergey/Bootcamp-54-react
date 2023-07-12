import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {
	const navigate = useNavigate()
	return (
		<header className='flex justify-between px-6 py-4 bg-darkMain text-white font-bold'>
			<nav className='flex gap-4 '>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/todos'>Todos</NavLink>
			</nav>
			<div>
				<h1>Hello example@mail.com.ua</h1>
			</div>
			<div className='flex gap-4'>
				<button>Login</button>
				<button onClick={() => navigate('/register')}>Register</button>
				<button>Exit</button>
			</div>
		</header>
	)
}
