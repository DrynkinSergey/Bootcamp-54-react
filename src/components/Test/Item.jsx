import React, { useContext, useState } from 'react'
import { loginContext } from '../../HOC/ContextProvider'

export const Item = ({ propsAuto, setPropsAuto }) => {
	const { auto, changeAuto } = useContext(loginContext)
	const [value, setValue] = useState('')
	const onSubmit = e => {
		e.preventDefault()
		changeAuto(value)
		setPropsAuto(value)
	}

	return (
		<div>
			<h1>Я маю в гаражі: {auto}</h1>
			<h1>Я маю в гаражі: {propsAuto}</h1>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
				<button>Buy</button>
			</form>
		</div>
	)
}
