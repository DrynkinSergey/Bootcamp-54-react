import React from 'react'

export const SelectItem = ({ selectedValue, onChangeSelectedValue }) => {
	return (
		<select
			value={selectedValue}
			onChange={e => onChangeSelectedValue(e.target.value)}
		>
			<option value='films'>Films</option>
			<option value='books'>Books</option>
		</select>
	)
}
