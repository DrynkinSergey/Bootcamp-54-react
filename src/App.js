import React, { Component } from 'react'
import { styled } from 'styled-components'
import { Header } from './components/Header/Header'
import { AddItemForm } from './components/AddItemForm/AddItemForm'
import { SelectItem } from './components/SelectItem/SelectItem'
import { ItemList } from './components/ItemList/ItemList'

export class App extends Component {
	state = {
		data: [
			{ title: 'Harry Potter', id: 0, tag: 'books' },
			{ title: 'Terminator', id: 1, tag: 'films' },
			{ title: 'Mafia', id: 1, tag: 'films' },
			{ title: 'Supernatural', id: 1, tag: 'films' },
			{ title: 'Don kihot', id: 1, tag: 'books' },
		],
	}

	getFilteredData = tag => {
		const { data } = this.state
		return data.filter(item => item.tag === tag)
	}

	render() {
		const { data } = this.state

		const books = this.getFilteredData('books')
		const films = this.getFilteredData('films')
		return (
			<Wrapper>
				<Header />
				<AddItemForm />
				<SelectItem />
				<ItemList data={books} title='My books list' />
				<ItemList data={films} title='My films list' />
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	padding: 15px 40px;
`
