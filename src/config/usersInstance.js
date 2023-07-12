import axios from 'axios'

export const instance = axios.create({
	baseURL: 'https://goit-task-manager.herokuapp.com/',
})
