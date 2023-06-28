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

	// componentDidUpdate(prevProps, prevState) {
	// 	if(prevState.counter !== this.state.counter){
	// console.log('Ти змінив лічильник')
	// if(prevState.step !== this.state.step){
	// console.log('Ти змінив step')
	// }
	// 	}
	// componentDidMount() {
	// 	console.log('Mount')
	//  }

	// console.log(counter)

	const handleChangeStep = stepValue => {
		// this.setState({ step: +stepValue })
		setStep(Number(stepValue))
	}
	const increment = () => {
		// this.setState(prevState => ({
		// 	counter: prevState.counter + prevState.step,
		// }))
		setCounter(prev => prev + step)
	}
	const decrement = () => {
		// this.setState(prevState => ({
		// 	counter: prevState.counter - prevState.step,
		// }))
		setCounter(prev => prev - step)
	}
	const reset = () => {
		// this.setState({ counter: 0, step: 1 })
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
// export class Counter extends Component {
// 	state = {
// 		counter: 0,
// 		step: 1,
// 	}

// handleChangeStep = stepValue => {
// 	this.setState({ step: +stepValue })
// }
// increment = () => {
// 	this.setState(prevState => ({
// 		counter: prevState.counter + prevState.step,
// 	}))
// }
// decrement = () => {
// 	this.setState(prevState => ({
// 		counter: prevState.counter - prevState.step,
// 	}))
// }
// reset = () => {
// 	this.setState({ counter: 0, step: 1 })
// }
// 	render() {
// 		return (
// 			<FlexContainer>
// 				<StyledCounter>
// 					<div>
// 						<input
// 							type='text'
// 							name='step'
// 							value={this.state.step}
// 							onChange={e => this.handleChangeStep(e.target.value)}
// 						/>
// 					</div>
// 					<h1>{this.state.counter}</h1>
// 					<Flex>
// 						<StyledButton onClick={this.decrement}>minus</StyledButton>
// 						<StyledButton onClick={this.reset}>reset</StyledButton>
// 						<StyledButton onClick={this.increment}>plus</StyledButton>
// 					</Flex>
// 				</StyledCounter>
// 			</FlexContainer>
// 		)
// 	}
// }
