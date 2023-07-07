import React from 'react'
import { selectIsLoggedIn, selectUsers } from '../redux/selectors'
import { useSelector } from 'react-redux'
import { styled } from 'styled-components'
import { Navigate, useNavigate } from 'react-router-dom'
import { UserList } from '../components/UserList'

export const DashboardPage = () => {
	const users = useSelector(selectUsers)
	const isLoggedIn = useSelector(selectIsLoggedIn)
	const navigate = useNavigate()
	if (!isLoggedIn) {
		return <Navigate to='/login' />
	}
	if (!users.length) {
		return (
			<EmptyPage>
				<button onClick={() => navigate('/addUser')}>Add User</button>
			</EmptyPage>
		)
	}
	return (
		<div>
			DashboardPage
			<UserList />
			<Button onClick={() => navigate('/addUser')}>Add user</Button>
		</div>
	)
}

const EmptyPage = styled.div`
	min-height: 100vh;
	display: grid;
	place-items: center;
	& button {
		font-size: 2rem;
		padding: 10px 20px;
	}
`
const Button = styled.button`
	padding: 4px 10px;
	font-size: 1.2rem;
	position: fixed;
	bottom: 10%;
	right: 10%;
`
