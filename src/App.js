import React, { useEffect, useState } from 'react'
import { useMyContext } from './context/users/useMyContext'
import { styled } from 'styled-components'
import {
	addUser,
	deleteUser,
	fetchUsers,
	sortUsers,
} from './context/users/actions'
import { createUser, getAll, removeUser } from './services/api'

export const App = () => {
	const { state, dispatch } = useMyContext()
	const [position, setPosition] = useState(state.positions[0])
	const [name, setName] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		createUser({ name, position })
		dispatch(addUser({ name, position }))
		setName('')
		setPosition(state.positions[0])
	}
	const getSortedData = type => {
		switch (type) {
			case 'ASC':
				return [...state.users].sort((a, b) => (a.name - b.name ? 1 : -1))
			case 'DESC':
				return [...state.users].sort((a, b) => (a.name - b.name ? -1 : 1))
			default:
				return state.users
		}
	}
	const sorted = getSortedData(state.type)

	useEffect(() => {
		getAll().then(res => dispatch(fetchUsers(res.data)))
	}, [dispatch])
	const handleDeleteUser = id => {
		removeUser(id)
		dispatch(deleteUser(id))
	}

	return (
		<div>
			<table>
				<thead>
					<th>#</th>
					<th>Name</th>
					<th>Position</th>
					<th>Options</th>
				</thead>
				<tbody>
					{sorted.map((i, idx) => (
						<tr>
							<TD>{idx + 1} </TD>
							<TD>{i.name} </TD>
							<TD>{i.position} </TD>
							<TD>
								{' '}
								<button onClick={() => handleDeleteUser(i.id)}>Del</button>
							</TD>
						</tr>
					))}
				</tbody>
			</table>

			<Flex>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<select value={position} onChange={e => setPosition(e.target.value)}>
						{state.positions.map(pos => (
							<option>{pos}</option>
						))}
					</select>
					<button>CREATE</button>
				</form>
				<select
					value={state.type}
					onChange={e => dispatch(sortUsers(e.target.value))}
				>
					<option>ASC</option>
					<option>DESC</option>
				</select>
			</Flex>
		</div>
	)
}

const TD = styled.td`
	padding: 5px 10px;
`
const Flex = styled.div`
	display: flex;
	gap: 10px;
`
