import React, { Component } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

class Modal extends Component {
	state = {
		value: 0,
	}
	intervalID = null
	timeoutID = null
	componentDidMount() {
		console.log('Modal is mount')
		document.addEventListener('keydown', this.handleKeydown)

		this.intervalID = setInterval(() => {
			console.log(new Date().toLocaleTimeString())
		}, 1000)

		this.timeoutID = setTimeout(() => {
			console.log('Hello')
			this.setState({ value: new Date().toISOString() })
		}, 3000)
	}
	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeydown)
		console.log('UNMOUNT')

		clearInterval(this.intervalID)
		clearTimeout(this.timeoutID)
	}

	handleKeydown = e => {
		if (e.key === 'Escape') {
			this.props.onClose()
		}
		console.log(e)
	}
	handleOutsideClick = e => {
		if (e.target === e.currentTarget) {
			this.props.onClose()
		}
	}

	render() {
		const { onClose, children } = this.props
		return (
			<ModalWrapper onClick={this.handleOutsideClick}>
				<ModalContent>
					<>
						<h1>Modal</h1>
						<hr />
					</>
					<CloseButton onClick={onClose}>×</CloseButton>
					{children}
				</ModalContent>
			</ModalWrapper>
		)
	}
}

export default Modal
