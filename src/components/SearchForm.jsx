import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../redux/itemSlice'

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
			<input type='text' value={filter} onChange={handleChange} />
			<button>Search</button>
		</form>
	)
}
