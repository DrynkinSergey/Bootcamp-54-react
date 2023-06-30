import React, { useState } from 'react'
import { useMyContext } from './context/users/useMyContext'

import { addUser } from './context/users/reducer/actions'
import { UserList } from './components/UserList'
import { toast } from 'react-toastify'
import { SelectPosition } from './components/SelectPosition'

export const App = () => {
	const [name, setName] = useState('')
	const [position, setPosition] = useState('Developer')
	const handleSubmit = e => {
		e.preventDefault()
		// console.log(addUser())
		dispatch(addUser(name))
		toast.info('Add is success')

		setName('')
	}
	const { dispatch } = useMyContext()

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<SelectPosition position={position} setPosition={setPosition} />
				<button>Add</button>
			</form>

			<table>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Position</th>
						<th>Options</th>
					</tr>
				</thead>
				<tbody>
					<UserList />
				</tbody>
			</table>
		</>
	)
}
