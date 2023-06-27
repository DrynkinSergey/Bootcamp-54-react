import axios from 'axios'

const todoApi = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
})
const reposApi = axios.create({
	baseURL: 'https://api.github.com/search',
})
//https://jsonplaceholder.typicode.com?_limit=3&_page=1&query='React'
export const getAllTodos = async searchParams => {
	const data = await todoApi.get('/todos', {
		params: {
			_limit: 3,
			...searchParams,
		},
	})
	return data
}

export const fetchRepos = async params => {
	const data = await reposApi.get('/repositories', {
		params: {
			per_page: 8,
			...params,
		},
	})
	return data
}
