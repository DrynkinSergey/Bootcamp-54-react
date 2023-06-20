import PropTypes from 'prop-types'
import { UserCard } from '../UserCard/UserCard'
import { css, styled } from 'styled-components'
export const Users = ({ users }) => {
	return (
		<>
			<Box primary />
			<Box />
			<Box secondary />
			<h1>Users</h1>
			<Wrapper>
				{users.map((user, index) => {
					return <UserCard index={index} key={user.id} {...user} />
				})}
			</Wrapper>
		</>
	)
}

const Box = styled.div`
	width: 150px;
	height: 150px;
	background-color: red;
	${props =>
		props.primary &&
		css`
			background-color: blue;
			width: 250px;
			height: 250px;
		`}
	${props =>
		props.secondary &&
		css`
			background-color: black;
			width: 350px;
			height: 350px;
		`}
`
const Box2 = styled(Box)`
	background-color: green;
`

const Wrapper = styled.ul`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 20px;
	padding: 20px 40px;
`

Users.propTypes = {
	users: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			email: PropTypes.string,
			bio: PropTypes.string,
			skills: PropTypes.arrayOf(PropTypes.string),
			isOpenToWork: PropTypes.bool,
		})
	),
}
// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "email": "Sincere@april.biz",
//   "bio": "Assumenda harum mollitia neque, officiis veniam repellat sapiente delectus aspernatur",
//   "skills": ["react", "vue"],
//   "isOpenToWork": false
// }
