import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../../services/api'
import { Link, NavLink } from 'react-router-dom'

export const UsersPage = () => {
	const [users, setUsers] = useState([])
	useEffect(() => {
		fetchUsers().then(res => setUsers(res))
	}, [])
	return (
		<>
			<h1>UsersPage</h1>
			<ul>
				{users.map(item => (
					<li key={item.id}>
						<Link to={`${item.id}`}>{item.name}</Link>
					</li>
				))}
			</ul>
		</>
	)
}
