import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { styled } from 'styled-components'

export const AboutPage = () => {
	return (
		<>
			<h1>AboutPage</h1>
			<NavList>
				<Link to='ourCompany'>Our Company</Link>
				<Link to='ourAim'>Our Aim</Link>
				<Link to='colorPicker'>Color Picker</Link>
			</NavList>
			<Outlet />
		</>
	)
}
const NavList = styled.nav`
	display: flex;
	gap: 20px;
`
