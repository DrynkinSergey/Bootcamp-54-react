import { useMyContext } from '../context/users/useMyContext'
import { UserItem } from './UserItem'

export const UserList = () => {
	const { state, dispatch } = useMyContext()
	return state.users.map((user, idx) => (
		<UserItem key={user.id} {...user} dispatch={dispatch} idx={idx} />
	))
}
