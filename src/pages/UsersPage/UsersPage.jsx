import { Link, NavLink } from 'react-router-dom'
import { useHttp } from '../../hooks/useHttp'
import { fetchUsers } from '../../services/api'

export const UsersPage = () => {
	const [users, setUsers] = useHttp(fetchUsers)
	return (
		<>
			<h1>UsersPage</h1>
			<ul>
				{users.map(item => (
					<li key={item.id}>
						{/* <Link to={`${item.id}`}>{item.name}</Link> */}
						<Link to={item.id.toString()}>{item.name}</Link>
					</li>
				))}
			</ul>
		</>
	)
}
