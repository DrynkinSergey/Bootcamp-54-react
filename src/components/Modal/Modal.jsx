import React, { Component } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

class Modal extends Component {
	componentDidMount() {
		console.log('Modal is mount')
	}
	componentWillUnmount() {
		console.log('UNMOUNT')
	}
	render() {
		const { onClose, children } = this.props
		return (
			<ModalWrapper>
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
