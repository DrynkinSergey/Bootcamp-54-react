import axios from 'axios'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { styled } from 'styled-components'
import { RegisterForm } from './components/RegisterForm/RegisterForm'

function App() {
	const [count, setCount] = useState(1)
	const [color, setColor] = useState('white')
	// let a = 1

	const isFirstRender = useRef(true)
	useEffect(() => {
		console.log('Відбувся перший рендер')
	}, [])
	useEffect(() => {
		//Пропуск першого рендера
		if (isFirstRender.current) {
			isFirstRender.current = false
			return
		}
		if (count === 5) {
			console.log('Лічильник дорівнює 5')
			setColor('teal')
		}
		if (count === 10) {
			setColor('green')

			axios
				.get('https://jsonplaceholder.typicode.com/todos')
				.then(res => console.log(res.data))
		}
	}, [count, isFirstRender])

	return (
		<Wrapper color={color}>
			<Btn onClick={() => setCount(prev => prev + 1)}>{count}</Btn>
			<h1>USE EFFECT</h1>
			<RegisterForm />
		</Wrapper>
	)
}

export default App
const Btn = styled.button`
	font-size: 2rem;
	padding: 10px 20px;
`
const Wrapper = styled.div`
	font-size: 2rem;
	min-height: 100vh;
	background-color: ${props => props.color};
`
