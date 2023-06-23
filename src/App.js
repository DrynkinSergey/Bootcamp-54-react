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
		selectedValue: 'books',
	}

	getFilteredData = tag => {
		const { data } = this.state
		return data.filter(item => item.tag === tag)
	}

	handleChangeInputData = title => {
		this.setState({ inputData: title })
	}
	handleChangeTag = (value, id) => {
		console.log(value, id)
		this.setState(prevState => ({
			data: prevState.data.map(item =>
				item.id === id ? { ...item, tag: value } : item
			),
		}))
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
		this.setState({ selectedValue: value })
	}
	handleDeleteItem = id => {
		this.setState(prevState => ({
			data: prevState.data.filter(item => item.id !== id),
		}))
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
				<ItemList
					onDelete={this.handleDeleteItem}
					onItemClick={this.handleChangeTag}
					data={books}
					title='My books list'
				/>
				<ItemList
					onDelete={this.handleDeleteItem}
					onItemClick={this.handleChangeTag}
					data={films}
					title='My films list'
				/>
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	padding: 15px 40px;
`
