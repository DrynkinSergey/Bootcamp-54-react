import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
	AddUserPage,
	DashboardPage,
	HomePage,
	LoginPage,
	NotFound,
} from './pages'
import { Layout } from './components'
import { EditPage } from './pages/EditPage'

export const App = () => {
	return (
		<Routes>
			<Route path='/login' element={<LoginPage />} />
			<Route path='/' element={<Layout />}>
				<Route index element={<HomePage />} />
				<Route path='dashboard' element={<DashboardPage />} />
				<Route path='dashboard/:id' element={<EditPage />} />
				<Route path='addUser' element={<AddUserPage />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
