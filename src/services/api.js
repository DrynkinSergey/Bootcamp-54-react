import axios from 'axios'

export const fetchUsers = async () => {
	try {
		const res = await axios.get('https://jsonplaceholder.typicode.com/users')
		return res.data
	} catch (error) {
		return error.message
	}
}

export const fetchOneUser = async id => {
	const res = await axios.get(
		`https://jsonplaceholder.typicode.com/users/${id}`
	)
	return res.data
}
