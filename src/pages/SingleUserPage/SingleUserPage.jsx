import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import { fetchOneUser } from '../../services/api'
import { useHttp } from '../../hooks/useHttp'

const SingleUserPage = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	console.log(navigate)
	const [user, setUser] = useHttp(fetchOneUser, id)
	const handleClickBackBtn = () => {
		navigate('/users')
	}
	return (
		<h1>
			<div>
				<p>SingleUserPage #{id}</p>
				<button onClick={handleClickBackBtn}>Back to results</button>
			</div>
			<div>
				<h2>Username: {user.name}</h2>
				<h2>Email: {user.email}</h2>
				<h3>Address: {user.address?.city}</h3>
				<h3>Address: {user.address?.street}</h3>
				<Link to='posts'>See user posts</Link>
				<br />
				<Link to='info'>See user info</Link>
				<Outlet />
			</div>
		</h1>
	)
}

export default SingleUserPage
