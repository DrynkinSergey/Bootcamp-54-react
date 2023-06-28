import React, { Component, useEffect } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'
import { toast } from 'react-toastify'

export const Modal = ({ onClose, children }) => {
	useEffect(() => {
		const handleKeydown = e => {
			if (e.key === 'Escape') {
				onClose()
			}
		}
		// Аналог дід маунта
		document.addEventListener('keydown', handleKeydown)

		//componentWillUnmount - analog
		return () => {
			document.removeEventListener('keydown', handleKeydown)
			toast.error('Не закривай котика!!!!')
		}
	}, [onClose])

	const handleOutsideClick = e => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	return (
		<ModalWrapper onClick={handleOutsideClick}>
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
// class Modal extends Component {
// 	state = {
// 		value: 0,
// 	}
// 	intervalID = null
// 	timeoutID = null
// 	componentDidMount() {
// 		console.log('Modal is mount')
// 		document.addEventListener('keydown', this.handleKeydown)

// 		this.intervalID = setInterval(() => {
// 			console.log(new Date().toLocaleTimeString())
// 		}, 1000)

// 		this.timeoutID = setTimeout(() => {
// 			console.log('Hello')
// 			this.setState({ value: new Date().toISOString() })
// 		}, 3000)
// 	}
// 	componentWillUnmount() {
// 		document.removeEventListener('keydown', this.handleKeydown)
// 		console.log('UNMOUNT')

// 		clearInterval(this.intervalID)
// 		clearTimeout(this.timeoutID)
// 	}

// handleKeydown = e => {
// 	if (e.key === 'Escape') {
// 		this.props.onClose()
// 	}
// 	console.log(e)
// }
// handleOutsideClick = e => {
// 	if (e.target === e.currentTarget) {
// 		this.props.onClose()
// 	}
// }

// 	render() {
// 		const { onClose, children } = this.props
// 		return (
// 			<ModalWrapper onClick={this.handleOutsideClick}>
// 				<ModalContent>
// 					<>
// 						<h1>Modal</h1>
// 						<hr />
// 					</>
// 					<CloseButton onClick={onClose}>×</CloseButton>
// 					{children}
// 				</ModalContent>
// 			</ModalWrapper>
// 		)
// 	}
// }

// export default Modal
