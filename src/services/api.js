import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'

export const fetchUsers = async () => {
	const res = await axios.get('/users')
	return res.data
}

export const deleteUserAPI = async id => {
	await axios.delete(`/users/${id}`)
}
