import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../redux/selectors'
import { SingleUser } from './SingleUser'

export const UserList = () => {
	const users = useSelector(selectUsers)

	return (
		<ul>
			{users.map(user => (
				<SingleUser key={user.id} {...user} />
			))}
		</ul>
	)
}
