import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CuteTodo } from './pages/Todo/CuteTodo'
import { Homepage } from './pages/Homepage'
import { RegisterPage } from './pages/RegisterPage'

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Homepage />} />
					<Route path='todos' element={<CuteTodo />} />
					<Route path='login' element={null} />
					<Route path='register' element={<RegisterPage />} />
					<Route path='*' element={<h1>Page is not found! 404</h1>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
