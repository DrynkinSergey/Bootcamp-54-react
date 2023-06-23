import React, { Component } from 'react'
import { styled } from 'styled-components'
import { Header } from './components/Header/Header'
import { AddItemForm } from './components/AddItemForm/AddItemForm'
import { SelectItem } from './components/SelectItem/SelectItem'
import { ItemList } from './components/ItemList/ItemList'

export class App extends Component {
	state = {
		data: [],
	}
	render() {
		const { data } = this.state
		return (
			<Wrapper>
				<Header />
				<AddItemForm />
				<SelectItem />
				<ItemList />
				<ItemList />
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	padding: 15px 40px;
`
