import React, { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CuteTodo } from './pages/Todo/CuteTodo'
import { Homepage } from './pages/Homepage'
import { RegisterPage } from './pages/RegisterPage'
import { LoginPage } from './pages/LoginPage'
import { PrivateRoute } from './hoc/PrivateRoute'
import { PublicRoute } from './hoc/PublicRoute'
import { useDispatch, useSelector } from 'react-redux'
import { refreshThunk } from './redux/auth/operations'
import { selectIsRefresh } from './redux/auth/selectors'
import { InfinitySpin } from 'react-loader-spinner'
import { toast } from 'react-toastify'
import { FormikPage } from './pages/FormikPage'
import { FormikPageUpgrade } from './pages/FormikPageUpgrade'

export const App = () => {
	const dispatch = useDispatch()
	const isRefreshing = useSelector(selectIsRefresh)
	useEffect(() => {
		dispatch(refreshThunk())
			.unwrap()
			.catch(res => toast.warning(res))
	}, [dispatch])
	return isRefreshing ? (
		<div
			className={` flex-col ${'bg-darkMain'} flex justify-center items-center min-h-screen`}
		>
			<InfinitySpin width='200' color='#a614fa' />
			<h1 className='text-white/80 font-bold text-2xl'>Loading...</h1>
		</div>
	) : (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Homepage />} />
					<Route
						path='todos'
						element={
							<PrivateRoute>
								<CuteTodo />
							</PrivateRoute>
						}
					/>
					<Route
						path='login'
						element={
							<PublicRoute>
								<LoginPage />
							</PublicRoute>
						}
					/>
					<Route
						path='register'
						element={
							<PublicRoute>
								<RegisterPage />
							</PublicRoute>
						}
					/>
					<Route path='*' element={<h1>Page is not found! 404</h1>} />
					<Route
						path='about'
						element={
							<PrivateRoute>
								<h1>Page ABOUT</h1>
							</PrivateRoute>
						}
					/>
					<Route path='123' element={<Navigate to='/' />} />
					<Route path='formik' element={<FormikPageUpgrade />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
