import { Component, PureComponent, useEffect, useState } from 'react'

import {
	StyledBackgroundTheme,
	StyledColorPalette,
	StyledColor,
	StyledColorsList,
} from './ColorPicker.styled'
import colorsData from './../../assets/colors.json'
import { toast } from 'react-toastify'

export const ColorPicker = ({ message }) => {
	const [colors] = useState(colorsData)
	const [currentColor, setCurrentColor] = useState('white')
	useEffect(() => {
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
