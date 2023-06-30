import React from 'react'
import { changeUserName, removeUser } from '../context/users/reducer/actions'
import { toast } from 'react-toastify'
import { changeUserAPI, deleteUserAPI } from '../services/api'

export const UserItem = ({ id, idx, name, position, dispatch }) => {
	const handleDelete = () => {
		dispatch(removeUser(id))
		deleteUserAPI(id)
		toast.success('Delete is success')
	}
	const handleChangeName = () => {
		const newName = prompt('Enter name:')
		dispatch(changeUserName({ id, name: newName }))
		changeUserAPI({ id, name: newName })
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
