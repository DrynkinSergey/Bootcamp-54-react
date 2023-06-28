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
	// const handleClick = color => {
	// 	// this.setState({ currentColor: color })
	// }

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
// export class ColorPicker extends Component {
// 	state = {
// 		colors: colorsData,
// 		currentColor: 'white',
// 	}
// 	componentDidMount() {
// 		console.log('Color picker is ready')
// 	}
// 	componentDidUpdate() {
// 		console.log('UPDATE')
// 		toast.info('You change color!')
// 	}

// 	shouldComponentUpdate(nextProps, nextState) {
// 		return nextState.currentColor !== this.state.currentColor
// 	}

// 	handleClick = color => {
// 		this.setState({ currentColor: color })
// 	}

// 	render() {
// 		const { colors, currentColor } = this.state
// 		const { message } = this.props
// 		return (
// 			<StyledBackgroundTheme bg_color={currentColor}>
// 				<StyledColorPalette>
// 					<h1>{message}</h1>
// 					<h1>Current color: {currentColor}</h1>
// 					<StyledColorsList>
// 						{colors.map(item => (
// 							<StyledColor
// 								key={item.id}
// 								onClick={() => this.handleClick(item.color)}
// 							>
// 								{item.color}
// 							</StyledColor>
// 						))}
// 					</StyledColorsList>
// 				</StyledColorPalette>
// 			</StyledBackgroundTheme>
// 		)
// 	}
// }
