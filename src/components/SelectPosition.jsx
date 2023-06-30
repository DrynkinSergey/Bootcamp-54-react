import React, { useState } from 'react'

export const SelectPosition = ({ position, setPosition }) => {
	return (
		<select value={position} onChange={e => setPosition(e.target.value)}>
			<option>Developer</option>
			<option>QA</option>
			<option>HR</option>
			<option>CEO</option>
		</select>
	)
}
