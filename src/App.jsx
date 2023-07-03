import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage/Homepage'
import { UsersPage } from './pages/UsersPage/UsersPage'
import SingleUserPage from './pages/SingleUserPage/SingleUserPage'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage/AboutPage'
export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Homepage />} />
					<Route path='about' element={<AboutPage />} />
					<Route path='info' element={<h1>Info page</h1>} />
					<Route path='users' element={<UsersPage />} />
					<Route path='users/:id' element={<SingleUserPage />} />
					<Route path='*' element={<h1>Page is not found....</h1>} />
				</Route>
			</Routes>
		</>
	)
}
