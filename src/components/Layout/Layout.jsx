import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { styled } from 'styled-components'

export const Layout = () => {
	return (
		<Wrapper>
			<Header />
			<div>
				<Outlet />
			</div>
		</Wrapper>
	)
}
const Wrapper = styled.div`
	max-width: 1080px;
	margin: 0 auto;
`
