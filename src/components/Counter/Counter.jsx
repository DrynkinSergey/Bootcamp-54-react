import React, { useEffect, useMemo, useReducer, useState } from 'react'
import {
	Flex,
	FlexContainer,
	StyledButton,
	StyledCounter,
} from './Counter.styled'
import { counterReducer, initialState } from '../../helpers/reducer'

export const Counter = () => {
	const [state, dispatch] = useReducer(counterReducer, initialState)
	const { counter, step } = state
	useEffect(() => {
		console.log('Mount')
	}, [])

	const handleChangeStep = stepValue => {
		// setStep(Number(stepValue))
		dispatch({ type: 'setStep', payload: Number(stepValue) })
	}

	return (
		<FlexContainer>
			<StyledCounter>
				<div>
					<input
						type='text'
						name='step'
						value={step}
						onChange={e => handleChangeStep(e.target.value)}
					/>
				</div>

				<h1>{counter}</h1>
				<Flex>
					<StyledButton onClick={() => dispatch({ type: 'minus' })}>
						minus
					</StyledButton>
					<StyledButton onClick={() => dispatch({ type: 'reset' })}>
						reset
					</StyledButton>
					<StyledButton onClick={() => dispatch({ type: 'plus' })}>
						plus
					</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}
