import React from 'react'
import './UserCard.css'
import s from './UserCard.module.css'
export const UserCard = ({ name, id, email, bio, isOpenToWork, skills }) => {
	const classes = !isOpenToWork ? `${s.name} ${s.red}` : `${s.name} ${s.green}`

	return (
		<li className={s.card_item}>
			<h1 className={classes}>{name}</h1>
			<h2>{email}</h2>
			<p className={s.bio}>{bio}</p>
			<ul>
				{skills.map(skill => (
					<li key={skill}>{skill}</li>
				))}
			</ul>
		</li>
	)
}
