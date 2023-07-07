import React from 'react'

export const CustomInput = ({
	name = 'input',
	type = 'text',
	handleChangeInput,
	value = '',
}) => {
	return (
		<label style={{ display: 'flex', flexDirection: 'column' }}>
			<span>{name}</span>
			<input
				required
				type={type}
				onChange={handleChangeInput}
				value={value}
				name={name}
				placeholder={name}
			/>
		</label>
	)
}
