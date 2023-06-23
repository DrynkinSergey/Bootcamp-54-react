import React from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

const Modal = ({ children, onClose }) => {
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

export default Modal
