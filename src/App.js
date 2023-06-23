import React, { Component } from 'react'
import { styled } from 'styled-components'
import { Header } from './components/Header/Header'
import { AddItemForm } from './components/AddItemForm/AddItemForm'
import { SelectItem } from './components/SelectItem/SelectItem'
import { ItemList } from './components/ItemList/ItemList'

export class App extends Component {
	state = {
		data: [],
		inputData: '',
		selectedValue: 'films',
	}

	getFilteredData = tag => {
		const { data } = this.state
		return data.filter(item => item.tag === tag)
	}

	handleChangeInputData = title => {
		this.setState({ inputData: title })
	}
	handleAddItem = title => {
		this.setState(prevState => ({
			data: [
				...prevState.data,
				{ title, id: crypto.randomUUID(), tag: this.state.selectedValue },
			],
		}))
	}
	handleChangeSelectedValue = value => {
		console.log(value)
		this.setState({ selectedValue: value })
	}

	render() {
		const { data, inputData, selectedValue } = this.state

		const books = this.getFilteredData('books')
		const films = this.getFilteredData('films')
		return (
			<Wrapper>
				<Header />
				<AddItemForm
					onAddItem={this.handleAddItem}
					onChangeData={this.handleChangeInputData}
					inputValue={inputData}
				/>
				<SelectItem
					onChangeSelectedValue={this.handleChangeSelectedValue}
					selectedValue={selectedValue}
				/>
				<ItemList data={books} title='My books list' />
				<ItemList data={films} title='My films list' />
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	padding: 15px 40px;
`
