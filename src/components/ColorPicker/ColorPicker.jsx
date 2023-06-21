import { Component } from 'react'

import {
	StyledBackgroundTheme,
	StyledColorPalette,
	StyledColor,
	StyledColorsList,
} from './ColorPicker.styled'
import colorsData from './../../assets/colors.json'

export class ColorPicker extends Component {
	state = {
		colors: colorsData,
		currentColor: 'white',
	}
	render() {
		const { colors, currentColor } = this.state

		return (
			<StyledBackgroundTheme>
				<StyledColorPalette>
					<h1>Current color: {currentColor}</h1>
					<StyledColorsList>
						{colors.map(item => (
							<StyledColor
								key={item.id}
								onClick={() => this.setState({ currentColor: item.color })}
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
