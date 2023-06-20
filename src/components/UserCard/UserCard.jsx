import React from 'react'
import './UserCard.css'
import {
	StyledBio,
	StyledCard,
	StyledName,
	StyledSkillItem,
} from './UserCard.styled'

export const UserCard = ({
	index,
	name,
	id,
	email,
	bio,
	isOpenToWork,
	skills,
}) => {
	const bgColor = Math.floor(Math.random() * 16777215).toString(16)
	return (
		<StyledCard bg={bgColor} index={index}>
			<StyledName isopen={isOpenToWork.toString()} id={id}>
				{name}
			</StyledName>
			<h2>{email}</h2>

			<StyledBio>{bio}</StyledBio>
			<ul>
				{skills.map(skill => (
					<StyledSkillItem key={skill}>{skill}</StyledSkillItem>
				))}
			</ul>
		</StyledCard>
	)
}
