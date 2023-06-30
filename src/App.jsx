import React, { useState } from 'react'
import { useMyContext } from './context/users/useMyContext'

export const App = () => {
	const [user, setUser] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		console.log('OK')
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={user}
					onChange={e => setUser(e.target.value)}
				/>
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
					<tr>
						<td>1</td>
						<td>Alex</td>
						<td>Developer</td>
						<td>
							<button>Delete</button>
						</td>
					</tr>
				</tbody>
			</table>
		</>
	)
}
