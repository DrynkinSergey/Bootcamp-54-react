import React from 'react'
import { useHttp } from '../../hooks/useHttp'
import { fetchUserPosts } from '../../services/api'
import { useParams } from 'react-router-dom'

const SingleUserPosts = () => {
	const { id } = useParams()
	const [posts] = useHttp(fetchUserPosts, id)
	console.log(posts)
	return (
		<ul>
			{posts.map((post, idx) => (
				<li key={post.id}>
					{idx + 1}.{post.title}
				</li>
			))}
		</ul>
	)
}

export default SingleUserPosts
