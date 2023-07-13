import React from 'react'
import { useSelector } from 'react-redux'
import { selectLoggedIn } from '../redux/auth/selectors'
import { Navigate, useLocation } from 'react-router-dom'

export const PublicRoute = ({ children }) => {
	const isLoggedIn = useSelector(selectLoggedIn)
	const location = useLocation()
	if (isLoggedIn) {
		return <Navigate to={location.state?.from ?? '/'} />
	}
	return children
}
