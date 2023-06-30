import { useMyContext } from '../context/users/useMyContext'
import { UserItem } from './UserItem'

export const UserList = ({ sortedData }) => {
	const { state, dispatch } = useMyContext()
	return sortedData.map((user, idx) => (
		<UserItem key={user.id} {...user} dispatch={dispatch} idx={idx} />
	))
}
