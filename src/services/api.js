import axios from 'axios'

export const createUser = body => {
	axios.post('http://localhost:3002/users', body)
}
export const removeUser = id => {
	axios.delete(`http://localhost:3002/users/${id}`)
}
export const getAll = () => {
	return axios.get('http://localhost:3002/users')
}
