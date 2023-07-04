import React, { useEffect, useState } from 'react'
import { fetchPosts, fetchPostsByQuery } from '../../services/api'
import { useHttp } from '../../hooks/useHttp'
import { useSearchParams } from 'react-router-dom'

const Posts = () => {
	const [value, setValue] = useState('')
	const [searchParams, setSearchParams] = useSearchParams()
	const query = searchParams.get('query') ?? ''
	// console.log(query, typeof query)
	const [posts] = useHttp(fetchPostsByQuery, query)
	// const getFilteredData = () => {
	// 	return posts.filter(post =>
	// 		post.body.toLowerCase().includes(query.toLowerCase())
	// 	)
	// }
	// const filteredData = getFilteredData()
	const handleSubmit = e => {
		e.preventDefault()
		setSearchParams(value ? { query: value } : {})
		setValue('')
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={value}
					onChange={
						// e => setSearchParams({ query: e.target.value })
						e =>
							// setSearchParams(e.target.value ? { query: e.target.value } : {})
							setValue(e.target.value)
					}
				/>
				<button>Filter</button>
			</form>
			{query && <h1>You search right now: {query}</h1>}
			<ul>
				{posts.map(post => (
					<li key={post.id}>
						<h2>{post.title}</h2>
						<p>{post.body}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Posts
