import { Component, PureComponent, useEffect, useState } from 'react'
import axios from 'axios'
import {
	StyledBackgroundTheme,
	StyledColorPalette,
	StyledColor,
	StyledColorsList,
} from './ColorPicker.styled'
import colorsData from './../../assets/colors.json'
import { toast } from 'react-toastify'

const ColorPicker = ({ message }) => {
	const [colors] = useState(colorsData)
	const [currentColor, setCurrentColor] = useState('white')
	useEffect(() => {
		axios.get('https://dummyjson.com/posts/search?q=love')
		console.log('Color picker is ready')
		toast.info('You change color!')
	}, [currentColor])

	return (
		<StyledBackgroundTheme bg_color={currentColor}>
			<StyledColorPalette>
				<h1>{message}</h1>
				<h1>Current color: {currentColor}</h1>
				<StyledColorsList>
					{colors.map(item => (
						<StyledColor
							key={item.id}
							onClick={() => setCurrentColor(item.color)}
						>
							{item.color}
						</StyledColor>
					))}
				</StyledColorsList>
			</StyledColorPalette>
		</StyledBackgroundTheme>
	)
}
export default ColorPicker
