import React from 'react'
import { changeUserName, removeUser } from '../context/users/reducer/actions'
import { toast } from 'react-toastify'
import { deleteUserAPI } from '../services/api'

export const UserItem = ({ id, idx, name, position, dispatch }) => {
	const handleDelete = () => {
		dispatch(removeUser(id))
		deleteUserAPI(id)
		toast.success('Delete is success')
	}
	const handleChangeName = () => {
		dispatch(changeUserName({ id, name: prompt('Enter name:') }))
	}

	return (
		<tr>
			<td>{idx + 1}</td>
			<td onClick={handleChangeName}>{name}</td>
			<td>{position}</td>
			<td>
				<button onClick={handleDelete}>Delete</button>
			</td>
		</tr>
	)
}
