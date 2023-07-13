import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../redux/itemSlice'
import { Button, Stack, TextField } from '@mui/material'

export const SearchForm = () => {
	const [filter, setFilterStr] = useState('')
	const dispatch = useDispatch()
	const handleSubmit = e => {
		e.preventDefault()
		dispatch(setFilter(filter))
	}
	const handleChange = ({ target: { value } }) => {
		setFilterStr(value)
	}
	return (
		<form onSubmit={handleSubmit}>
			<Stack direction='row' spacing={1}>
				<TextField
					id='standard-basic'
					label='Standard'
					variant='standard'
					value={filter}
					sx={{ ml: '1rem' }}
					onChange={handleChange}
				/>
				<Button variant='contained'>Search</Button>
			</Stack>
		</form>
	)
}
