import React from 'react'
import { useSelector } from 'react-redux'
import { selectLoggedIn } from '../redux/auth/selectors'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {
	const isLoggedIn = useSelector(selectLoggedIn)
	const location = useLocation()
	console.log(location)
	if (!isLoggedIn) {
		return <Navigate to='/login' state={{ from: location }} />
	}
	return children
}
