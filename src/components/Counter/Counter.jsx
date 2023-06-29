import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
	Flex,
	FlexContainer,
	StyledButton,
	StyledCounter,
} from './Counter.styled'

export const Counter = () => {
	const [counter, setCounter] = useState(0)
	const [step, setStep] = useState(1)

	const myBigCalculatiionEver = step => {
		console.log('CALCULATE')
		for (let i = 1; i < 1000000000; i++) {}
		return 1 + step
	}
	// const calcValue = myBigCalculatiionEver(step)
	const calcValue = useMemo(() => myBigCalculatiionEver(step), [step])

	useEffect(() => {
		console.log('Mount')
	}, [])

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
				<h1>My value : {calcValue}</h1>
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
