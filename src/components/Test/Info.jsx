import React from 'react'
import { Item } from './Item'

export const Info = ({ propsAuto, setPropsAuto }) => {
	return (
		<div>
			<Item propsAuto={propsAuto} setPropsAuto={setPropsAuto} />
		</div>
	)
}
