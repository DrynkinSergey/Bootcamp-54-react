import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { NavBar } from './NavBar'

export const Layout = () => {
	const location = useLocation()
	console.log(location)
	return (
		<LayoutWrapper>
			<NavBar />
			<WrapperOutlet>
				<Outlet />
			</WrapperOutlet>
		</LayoutWrapper>
	)
}

const LayoutWrapper = styled.main`
	display: grid;
	grid-template-columns: 1fr;
`
const WrapperOutlet = styled.div`
	padding: 20px;
	padding-left: 290px;
`
