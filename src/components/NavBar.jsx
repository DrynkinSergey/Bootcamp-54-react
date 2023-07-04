import { Link, NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../hooks/useAuth'

export const NavBar = () => {
	const { user, logout } = useAuth()
	const navigate = useNavigate()
	const navMap = [
		{ href: '/', title: 'Home' },
		{ href: '/about', title: 'About' },
		{ href: '/users', title: 'Users' },
		{ href: '/posts', title: 'Posts' },

		{ href: '/login', title: 'Login' },
	]
	return (
		<SideBar>
			{user && <h1>{user}</h1>}
			{navMap.map(link => (
				<NavItem key={link.href} to={link.href}>
					{link.title}
				</NavItem>
			))}

			{user ? (
				<>
					<NavItem to='/test'>Test</NavItem>
					<button onClick={() => logout()}>Logout</button>
				</>
			) : (
				<button onClick={() => navigate('/login')}>Login</button>
			)}
		</SideBar>
	)
}

const SideBar = styled.nav`
	background-color: #d5edfd;
	min-height: 100vh;
	border-right: 2px solid black;
	display: flex;
	flex-direction: column;
	gap: 25px;
	position: fixed;
	width: 200px;
	padding: 40px 20px;
`
export const NavItem = styled(NavLink)`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 5px;
	border-radius: 4px;
	text-decoration: none;
	color: black;

	&.active {
		background-color: blue;
		color: white;
	}
	&:hover:not(.active) {
		background-color: lightblue;
	}
`
