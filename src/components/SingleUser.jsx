import React from 'react'
import { useDispatch } from 'react-redux'
import { styled } from 'styled-components'
import { deleteUser } from '../redux/usersSlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const SingleUser = ({ id, name, age, position, salary }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const handleDelete = () => {
		dispatch(deleteUser(id))
		toast.info(`User ${name} gone from our family`)
	}
	return (
		<LI>
			<p>Name: {name}</p>
			<p>Position: {position}</p>
			<p>Age: {age}</p>
			<p>Salary: {salary}</p>
			<div>
				<button onClick={handleDelete}>Delete</button>
				<button onClick={() => navigate(id)}>Edit</button>
			</div>
		</LI>
	)
}

const LI = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	list-style: none;
	border: 2px solid black;
	padding: 5px;
	margin-bottom: 10px;
	border-radius: 12px;
	& div {
		display: flex;
		gap: 10px;
	}
`
