import { Component } from 'react'

import {
	StyledBackgroundTheme,
	StyledColorPalette,
	StyledColor,
	StyledColorsList,
} from './ColorPicker.styled'

export class ColorPicker extends Component {
	state = {
		colors: this.props.data,
		currentColor: 'white',
	}

	handleClick = color => {
		this.setState({ currentColor: color })
	}

	render() {
		const { colors, currentColor } = this.state
		const { message } = this.props
		console.log(this.props)
		return (
			<StyledBackgroundTheme bg_color={currentColor}>
				<StyledColorPalette>
					<h1>{message}</h1>
					<h1>Current color: {currentColor}</h1>
					<StyledColorsList>
						{colors.map(item => (
							<StyledColor
								key={item.id}
								onClick={() => this.handleClick(item.color)}
							>
								{item.color}
							</StyledColor>
						))}
					</StyledColorsList>
				</StyledColorPalette>
			</StyledBackgroundTheme>
		)
	}
}

// export const ColorPicker = ({ colors = [] }) => {
// return (
// 	<StyledBackgroundTheme>
// 		<StyledColorPalette>
// 			<StyledColorsList>
// 				{colorsData.map(item => (
// 					<StyledColor key={item.id}>{item.color}</StyledColor>
// 				))}
// 			</StyledColorsList>
// 		</StyledColorPalette>
// 	</StyledBackgroundTheme>
// )
// }
