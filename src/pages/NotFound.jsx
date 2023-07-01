import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<>
			<h1>Page is not found...</h1>
			<img
				src='https://miro.medium.com/v2/resize:fit:750/0*QOZm9X5er1Y0r5-t'
				alt=''
			/>
			<Link to='/'>Go to home</Link>
		</>
	)
}

export default NotFound
