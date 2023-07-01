import { Link } from 'react-router-dom'
import { useHttp } from '../../hooks/useHttp'
import { fetchUsers } from '../../services/userApi'

const Users = () => {
	const [users, setUsers] = useHttp(fetchUsers)
	return (
		<>
			<h1>Users</h1>
			{users.map(user => (
				<li key={user.id}>
					<Link to={user.id.toString()}>{user.name}</Link>
					{/* <Link to={`${user.id}`}>{user.name}</Link> */}
				</li>
			))}
		</>
	)
}

export default Users
