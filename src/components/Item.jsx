import React from 'react'

export const Item = props => {
	console.log(props.key)
	return <li>{props.title}</li>
}
