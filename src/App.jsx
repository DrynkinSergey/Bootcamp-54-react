import React, { lazy } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { Homepage } from './pages/Homepage/Homepage'
import { UsersPage } from './pages/UsersPage/UsersPage'
import SingleUserPage from './pages/SingleUserPage/SingleUserPage'
import { Layout } from './components/Layout'
import SingleUserPosts from './pages/SingleUserPage/SingleUserPosts'
import IndexPage from './pages/AboutPage/nestedPages/IndexPage'
import { Test } from './pages/Test'
import PrivateRoute from './hoc/PrivateRoute'
import Login from './pages/Login/Login'
import { PublicRoute } from './hoc/PublicRoute'
import Posts from './pages/Posts/Posts'

const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'))
const OurAim = lazy(() => import('./pages/AboutPage/nestedPages/OurAim'))
const ColorPicker = lazy(() => import('./pages/ColorPicker/ColorPicker'))
const OurCompany = lazy(() =>
	import('./pages/AboutPage/nestedPages/OurCompany')
)
export const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Homepage />} />
					<Route path='posts' element={<Posts />} />
					<Route
						path='test'
						element={
							<PrivateRoute>
								<Test />
							</PrivateRoute>
						}
					/>
					<Route
						path='login'
						element={
							<PublicRoute>
								<Login />
							</PublicRoute>
						}
					/>
					<Route path='about-us' element={<Navigate to='/about' />} />
					<Route path='about' element={<AboutPage />}>
						<Route index element={<IndexPage />} />
						<Route path='ourCompany' element={<OurCompany />} />
						<Route path='ourAim' element={<OurAim />} />
						<Route path='colorPicker' element={<ColorPicker />} />
					</Route>
					<Route
						path='users'
						element={
							<PrivateRoute>
								<UsersPage />
							</PrivateRoute>
						}
					/>
					<Route path='users/:id' element={<SingleUserPage />}>
						<Route index element={<h1>Click on links</h1>} />
						<Route
							path='posts'
							element={
								<PrivateRoute>
									<SingleUserPosts />
								</PrivateRoute>
							}
						/>
						<Route path='info' element={<h1>User default info</h1>} />
					</Route>
					<Route path='*' element={<h1>Page is not found....</h1>} />
				</Route>
			</Routes>
		</>
	)
}
