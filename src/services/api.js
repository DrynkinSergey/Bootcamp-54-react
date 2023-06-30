import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'

// CRUD - create(post), read(get), update(patch/put), delete(delete)

export const fetchUsers = async () => {
	const res = await axios.get(`/users`)
	return res.data
}

export const deleteUserAPI = async id => {
	await axios.delete(`/users/${id}`)
}
export const createUser = async body => {
	const res = await axios.post(`/users`, body)
	return res.data
}
export const changeUserAPI = user => {
	axios.patch(`/users/${user.id}`, { name: user.name })
}
