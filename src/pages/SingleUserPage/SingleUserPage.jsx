import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchOneUser } from '../../services/api'
import { useHttp } from '../../hooks/useHttp'

const SingleUserPage = () => {
	const { id } = useParams()
	const [user, setUser] = useHttp(fetchOneUser, id)
	// const [user, setUser] = useState('')
	// useEffect(() => {
	// 	fetchOneUser(id).then(res => setUser(res))
	// }, [id])
	return (
		<h1>
			SingleUserPage #{id}
			<div>
				<h1>Username: {user.name}</h1>
				<h2>Email: {user.email}</h2>
				{/* {user && <h3>Address: {user.address.city}</h3>} */}
				<h3>Address: {user.address?.city}</h3>
				<h3>Address: {user.address?.street}</h3>
			</div>
		</h1>
	)
}

export default SingleUserPage
