import PropTypes from 'prop-types'
import { UserCard } from '../UserCard/UserCard'

export const Users = ({ users }) => {
	return (
		<div className='wrapper'>
			<h1>Users</h1>
			<ul>
				{users.map(user => (
					<UserCard key={user.id} {...user} />
				))}
			</ul>
		</div>
	)
}

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
