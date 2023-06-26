import React, { Component } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

class Modal extends Component {
	componentDidMount() {
		console.log('Modal is mount')
	}
	componentWillUnmount() {
		console.log('UNMOUNT')
	}

	handleOutsideClick = e => {
		// console.log('target =====>>> ', e.target)
		// console.log('currentTarget =====>>> ', e.currentTarget)
		// console.log(e.target === e.currentTarget)
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
