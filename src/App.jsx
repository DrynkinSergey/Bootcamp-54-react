import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useMyContext } from './context/users/useMyContext'

import { addUser, setUsersFromServer } from './context/users/reducer/actions'
import { UserList } from './components/UserList'
import { toast } from 'react-toastify'
import { styled } from 'styled-components'
import { Select } from './components/Select'
import { getSortedData } from './helpers/getSortedData'
import { createUser, fetchUsers } from './services/api'

export const App = () => {
	const { state, dispatch, positions } = useMyContext()

	useEffect(() => {
		fetchUsers().then(res => dispatch(setUsersFromServer(res)))
	}, [dispatch])

	const sortVariants = ['ASC', 'DESC']

	const [name, setName] = useState('')
	const [sortType, setSortType] = useState(sortVariants[0])
	const [position, setPosition] = useState('Developer')

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(addUser({ name, position }))
		toast.info('Add is success')
		setName('')
	}

	const sortedData = useMemo(
		() => getSortedData({ users: state.users, type: sortType }),
		[sortType, state.users]
	)

	return (
		<Wrapper>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<Select value={position} setValue={setPosition} data={positions} />
				<button>Add</button>
			</form>
			<Select value={sortType} setValue={setSortType} data={sortVariants} />
			<button onClick={createUser}>ADD user</button>
			<Table>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Position</th>
						<th>Options</th>
					</tr>
				</thead>
				<tbody>
					<UserList sortedData={sortedData} />
				</tbody>
			</Table>
		</Wrapper>
	)
}
const Wrapper = styled.div`
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 20px;
	/* font-size: 2rem; */
	font-size: calc((1vh + 1vw) * 1.2);
`
const Table = styled.table`
	background-color: gray;
	color: white;
	width: 50%;
	th,
	td {
		height: 40px;
		text-align: center;
	}
	th {
		background-color: rgb(54, 187, 228);
		text-transform: uppercase;
		font-weight: 600;
	}

	tr:nth-child(2n) {
		background-color: rgba(214, 225, 232, 0.5);
	}
`
