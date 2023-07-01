import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavItem } from '../../components/NavBar'
import { styled } from 'styled-components'

const AboutPage = () => {
	return (
		<>
			<h1>AboutPage</h1>

			<Nav>
				<NavItem to='ourMission'>Our Mission</NavItem>
				<NavItem to='ourAim'>Our Target</NavItem>
			</Nav>
			<Outlet />
		</>
	)
}

export default AboutPage

const Nav = styled.nav`
	display: flex;
`
