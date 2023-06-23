import { Component } from 'react'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import { Employees } from './components/Employees/Employee'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
import Modal from './components/Modal/Modal'
import { Counter } from './components/Counter/Counter'
import { Button } from './components/Button'
import { FlexContainer } from './components/Counter/Counter.styled'
import { Message } from './components/Message/Message'

export class App extends Component {
	static defaultProps = {
		title: 'Значення котре буде, якщо я не передам пропс тайтл',
	}

	state = {
		isOpenModal: false,
		isLoggedIn: false,
		value: 1,
		data: {
			name: 'Alex',
			age: 45,
		},
	}
	toggleModal = () => {
		this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }))
	}
	toggleLogin = () => {
		this.setState(
			prevState => ({ value: 10 }),
			() => console.log(this.state.value)
		)

		window.localStorage.setItem('Test', JSON.stringify(this.state.data))
		this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }))
	}
	getData = () => {
		const data = window.localStorage.getItem('Test')
		console.log(JSON.parse(data))
	}

	render() {
		const { message, title } = this.props
		return (
			<>
				{/* <h1>{this.state.value}</h1>
				<button onClick={this.toggleModal}>
					{!this.state.isOpenModal ? 'Open' : 'Close'} modal
				</button>
				<button onClick={this.toggleLogin}>
					{!this.state.isLoggedIn ? 'Online' : 'Ofline'}
				</button>
				<RegisterForm />

				{this.state.isOpenModal ? (
					<Modal onClose={this.toggleModal}>
						<h1>Hello from our cute modal</h1>
						<button onClick={this.toggleModal}>OK</button>
					</Modal>
				) : null} */}
				<FlexContainer column={true.toString()}>
					<h1>{title}</h1>
					<h1>{message}</h1>
					<Button cb={this.toggleLogin}>Set data to local storage</Button>

					<Button cb={this.getData}>Get data LS</Button>
					<Message />
				</FlexContainer>
			</>
		)
	}
}
