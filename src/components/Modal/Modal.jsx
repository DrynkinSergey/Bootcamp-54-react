import React, { Component, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'
import { toast } from 'react-toastify'

const modalRoot = document.querySelector('#modal')
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

	return ReactDOM.createPortal(
		<ModalWrapper onClick={handleOutsideClick}>
			<ModalContent>
				<>
					<h1>Modal</h1>
					<hr />
				</>
				<CloseButton onClick={onClose}>×</CloseButton>
				{children}
			</ModalContent>
		</ModalWrapper>,
		modalRoot
	)
}
