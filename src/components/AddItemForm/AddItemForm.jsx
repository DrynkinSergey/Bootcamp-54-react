import React from 'react'

export const AddItemForm = ({ onAddItem, onChangeData, inputValue }) => {
	const handleSubmit = e => {
		e.preventDefault()
		onAddItem(inputValue)
		onChangeData('')
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={inputValue}
				// onChange={onChangeData}
				onChange={e => onChangeData(e.target.value)}
			/>
			<button>Add item</button>
		</form>
	)
}
