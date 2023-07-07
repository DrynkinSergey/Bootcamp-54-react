import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
import { logout } from '../redux/authSlice'
import { selectUserInfo } from '../redux/selectors'

export const Navbar = () => {
	const dispatch = useDispatch()
	const { name } = useSelector(selectUserInfo)
	return (
		<NavItems>
			<div>
				<StyledLink to='/'>Home</StyledLink>
				<StyledLink to='/dashboard'>Dashboard</StyledLink>
				{name && <StyledLink to='/login'>Login</StyledLink>}
			</div>
			<button onClick={() => dispatch(logout())}>EXIT</button>
		</NavItems>
	)
}

const NavItems = styled.nav`
	display: flex;
	justify-content: space-between;
	gap: 20px;
`
const StyledLink = styled(NavLink)`
	color: black;
	font-size: 1.5rem;
	padding: 4px 10px;
	&.active {
		background-color: blue;
		color: white;
		font-weight: bold;
	}
`
