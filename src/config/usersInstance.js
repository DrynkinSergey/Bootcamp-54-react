import axios from 'axios'

export const instance = axios.create({
	baseURL: 'https://goit-task-manager.herokuapp.com/',
})
export const instanceJsonPH = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const setToken = token => {
	instance.defaults.headers.common.Authorization = `Bearer ${token}`
}
export const clearToken = () => {
	instance.defaults.headers.common.Authorization = ``
}
