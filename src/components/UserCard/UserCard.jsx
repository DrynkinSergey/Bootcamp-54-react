import React from 'react'
import './UserCard.css'
import clsx from 'clsx'
import s from './UserCard.module.scss'
export const UserCard = ({ name, id, email, bio, isOpenToWork, skills }) => {
	const classes = !isOpenToWork ? `${s.name} ${s.red}` : `${s.name} ${s.green}`

	return (
		<li className={s.card_item}>
			<h1 className={clsx(s.name, isOpenToWork ? s.green : s.red)}>{name}</h1>
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
