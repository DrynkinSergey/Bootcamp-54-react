import React from 'react'

export const Modal = props => {
	console.log(props)
	return (
		<div>
			<h1>My modal</h1>
			<hr />
			{props.children}
		</div>
	)
}
