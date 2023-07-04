import axios from 'axios'

// export const fetchUsers = async () => {
// 	const res = await axios.get('https://jsonplaceholder.typicode.com/users')
// 	return res.data
// }

export const fetchUsers = async () => {
	const abortController = new AbortController()
	const signal = abortController.signal

	setTimeout(() => {
		abortController.abort()
	}, 1000)
	try {
		const res = await axios.get('https://jsonplaceholder.typicode.com/users', {
			signal,
		})
		return res.data
	} catch (error) {
		if (error.message === 'canceled') {
			console.log('Ми обірвали запит через аборт контреллер')
		} else {
			console.log('Errro', error)
		}
		throw error
	}
}

export const fetchOneUser = async id => {
	const res = await axios.get(
		`https://jsonplaceholder.typicode.com/users/${id}`
	)
	return res.data
}

export const fetchUserPosts = async id => {
	const res = await axios.get(`https://dummyjson.com/posts/user/${id}`)
	return res.data.posts
}
export const fetchPosts = async () => {
	const res = await axios.get(`https://dummyjson.com/posts`)
	return res.data.posts
}
export const fetchPostsByQuery = async query => {
	const res = await axios.get(`https://dummyjson.com/posts/search?q=${query}`)
	return res.data.posts
}
