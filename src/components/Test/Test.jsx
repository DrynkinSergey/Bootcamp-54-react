import React from 'react'
import { TestDataInfo } from './TestDataInfo'

export const Test = ({ propsAuto, setPropsAuto }) => {
	return (
		<div>
			<TestDataInfo propsAuto={propsAuto} setPropsAuto={setPropsAuto} />
		</div>
	)
}
