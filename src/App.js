import { Component } from 'react'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import { Employees } from './components/Employees/Employee'
import { RegisterForm } from './components/RegisterForm/RegisterForm'
import Modal from './components/Modal/Modal'
import { Counter } from './components/Counter/Counter'

export class App extends Component {
	state = {
		isOpenModal: false,
		isLoggedIn: false,
	}
	toggleModal = () => {
		this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }))
	}
	toggleLogin = () => {
		this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }))
	}
	render() {
		return (
			<>
				<h1>{this.state.value}</h1>
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
				) : null}
			</>
		)
	}
}
