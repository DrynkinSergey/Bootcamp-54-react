import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useHttp } from '../../hooks/useHttp'
import { fetchUsersPosts } from '../../services/userApi'

const UserPosts = () => {
	const { id } = useParams()
	const [posts, setPosts] = useHttp(() => fetchUsersPosts(id))
	// useEffect(() => {
	// 	const fetchUsers = async () => {
	// 		const res = await axios.get(`https://dummyjson.com/posts/user/${id}`)
	// 		setPosts(res.data.posts)
	// 	}
	// 	fetchUsers()
	// }, [id])
	return (
		<div>
			UserPosts
			<ul>
				{posts.map((post, index) => (
					<li key={post.id}>
						{index + 1}.{post.title}
					</li>
				))}
			</ul>
		</div>
	)
}

export default UserPosts
