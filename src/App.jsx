import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Users from './pages/Users/Users'
import AboutPage from './pages/AboutPage/AboutPage'
import OurAim from './pages/AboutPage/OurAim'
import OurMission from './pages/AboutPage/OurMission'
import SingleUserPage from './pages/SingleUserPage/SingleUserPage'
import UserPosts from './pages/SingleUserPage/UserPosts'

export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<h1>Welcome to homepage</h1>} />
					<Route path='about' element={<AboutPage />}>
						<Route
							index
							element={<h1>Hello to our page, you can choise one of link</h1>}
						/>
						<Route path='ourAim' element={<OurAim />} />
						<Route path='ourMission' element={<OurMission />} />
					</Route>
					<Route path='users' element={<Users />} />
					<Route path='users/:id' element={<SingleUserPage />}>
						<Route path='posts' element={<UserPosts />} />
					</Route>
				</Route>
			</Routes>
		</>
	)
}
