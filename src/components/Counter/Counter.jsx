import React, { Component, useState } from 'react'
import {
	Flex,
	FlexContainer,
	StyledButton,
	StyledCounter,
} from './Counter.styled'

export const Counter = () => {
	const [counter, setCounter] = useState(0)
	const [step, setStep] = useState(1)

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
		setStep(1)
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
					<StyledButton onClick={increment}>plus</StyledButton>
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
