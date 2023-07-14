import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeFilter } from '../redux/productsSlice'

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
			<input
				ref={myInputRef}
				type='text'
				value={filter}
				onChange={handleChangeInput}
				placeholder='Search...'
			/>
			<button>Search</button>
		</form>
	)
}
