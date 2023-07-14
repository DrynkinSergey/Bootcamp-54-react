import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeFilter } from '../redux/productsSlice'
import { Button, Stack, TextField } from '@mui/material'

export const SearchForm = () => {
	const [filter, setFilter] = useState('')
	const myInputRef = useRef(null)
	const dispatch = useDispatch()
	useEffect(() => {
		myInputRef.current.focus()
	}, [])

	const handleSubmit = e => {
		e.preventDefault()
		dispatch(changeFilter(filter))
	}
	const handleChangeInput = ({ target: { value } }) => {
		setFilter(value)
	}
	return (
		<form onSubmit={handleSubmit}>
			<Stack
				direction='row'
				justifyContent='center'
				alignItems='center'
				spacing={4}
			>
				<TextField
					ref={myInputRef}
					id='standard-basic'
					sx={{ width: '100%' }}
					value={filter}
					onChange={handleChangeInput}
					label='Search'
					variant='standard'
				/>
				<Button color='primary' type='submit' variant='contained'>
					Search
				</Button>
			</Stack>
		</form>
	)
}
