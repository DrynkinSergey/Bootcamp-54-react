import React from 'react'
import { styled } from 'styled-components'

export const Button = ({ children, cb }) => {
	return <StyledButton onClick={cb}>{children}</StyledButton>
}

export const StyledButton = styled.button`
	padding: 10px 20px;
	border-radius: 12px;
	font-size: 1rem;
	background-color: #4949f3;
	color: white;
	font-weight: bold;
	&:hover {
		background-color: #0606ff;
		cursor: pointer;
	}
`
