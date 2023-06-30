import React from 'react'
import { removeUser } from '../context/users/reducer/actions'
import { toast } from 'react-toastify'

export const UserItem = ({ id, idx, name, position, dispatch }) => {
	const handleDelete = () => {
		dispatch(removeUser(id))
		toast.success('Delete is success')
	}

	return (
		<tr>
			<td>{idx + 1}</td>
			<td>{name}</td>
			<td>{position}</td>
			<td>
				<button onClick={handleDelete}>Delete</button>
			</td>
		</tr>
	)
}
