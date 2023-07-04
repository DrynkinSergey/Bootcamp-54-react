import React from 'react'
import { Suspense } from 'react'
import { BallTriangle } from 'react-loader-spinner'
import { Link, Outlet } from 'react-router-dom'
import { styled } from 'styled-components'

const AboutPage = () => {
	return (
		<>
			<h1>AboutPage</h1>
			<NavList>
				<Link to='ourCompany'>Our Company</Link>
				<Link to='ourAim'>Our Aim</Link>
				<Link to='colorPicker'>Color Picker</Link>
			</NavList>
			<Suspense
				fallback={
					<BallTriangle
						height={100}
						width={100}
						radius={5}
						color='#0f0bf7'
						ariaLabel='ball-triangle-loading'
						wrapperClass={{}}
						wrapperStyle=''
						visible={true}
					/>
				}
			>
				<Outlet />
			</Suspense>
		</>
	)
}
const NavList = styled.nav`
	display: flex;
	gap: 20px;
`
export default AboutPage
