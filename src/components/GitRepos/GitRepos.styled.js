import styled from 'styled-components'

export const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	background-color: deepskyblue;
	font-size: 1.5rem;
	box-shadow: 2px 2px 4px 0 black;

	form {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		input,
		button {
			box-shadow: 2px 2px 4px 0 black;
		}
		input {
			padding: 10px;
			border-radius: 8px;
			border: none;
		}
		button {
			border: none;
			padding: 10px;
			border-radius: 8px;
			cursor: pointer;
		}
	}
`

export const StyledRepoList = styled.ul`
	display: grid;
	padding: 10px 0;
	justify-content: center;
	grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
	gap: 10px;
`

export const StyledCard = styled.li`
	list-style: none;
	border-radius: 12px;
	border: 2px solid black;
	padding: 10px 10px;
	box-shadow: 2px 2px 4px 0 black;
`
export const StyledRepoImg = styled.div`
	width: 250px;
	display: flex;
	justify-content: center;
	margin: 0 auto;
	overflow: hidden;
	img {
		width: 50%;
	}
`
