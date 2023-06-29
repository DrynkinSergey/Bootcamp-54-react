import React, { Component, useEffect, useState } from 'react'
import {
	Flex,
	FlexContainer,
	StyledButton,
	StyledCounter,
} from './Counter.styled'

export const Counter = () => {
	const [counter, setCounter] = useState(0)
	const [step, setStep] = useState(1)

	useEffect(() => {
		console.log('Mount')
	}, [])
	useEffect(() => {
		console.log('Ти змінив лічильник або крок')
	}, [counter, step])
	useEffect(() => {
		console.log('Ти змінив тільки крок')
	}, [step])

	const handleChangeStep = stepValue => {
		setStep(Number(stepValue))
	}
	const increment = () => {
		setCounter(prev => prev + step)
	}
	const decrement = () => {
		setCounter(prev => prev - step)
	}
	const reset = () => {
		setCounter(0)
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
					<StyledButton onClick={decrement}>minus</StyledButton>
					<StyledButton onClick={reset}>reset</StyledButton>
					<StyledButton onClick={() => setCounter(prev => prev + 1)}>
						plus
					</StyledButton>
				</Flex>
			</StyledCounter>
		</FlexContainer>
	)
}
