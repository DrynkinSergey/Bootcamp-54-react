import { styled } from 'styled-components'

export const StyledCard = styled.li`
	background-color: #${props => props.bg};
	font-weight: bold;
	width: 30%;
	list-style: none;
	padding: 20px 10px;
	&:hover {
		transform: translateY(-10px);
		cursor: pointer;
	}
`
export const StyledName = styled.h1`
	font-size: 1rem;
	color: ${props => (props.isopen === 'true' ? 'green' : 'red')};
`
export const StyledBio = styled.p`
	font-style: italic;
`
export const StyledSkillItem = styled.li`
	padding: 4px 4px;
	border: 2px solid black;
	width: 100px;
	margin-bottom: 10px;
	border-radius: 8px;
`
