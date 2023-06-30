import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'

export const fetchUsers = async () => {
	const res = await axios.get('/users')
	return res.data
}

export const deleteUserAPI = async id => {
	await axios.delete(`/users/${id}`)
}
export const createUser = async body => {
	await axios.post(`/users/`, {
		name: 'STEPAN',
		position: 'Developer',
		id: '866854d1-9513-4f76-9e23-86c0d5c25c47',
	})
}
