import React, { Component } from 'react'
import { styled } from 'styled-components'

export class App extends Component {
	state = {
		data: [{ title: 'Harry Potter', id: 0, tag: 'books' }],
	}
	render() {
		const { data } = this.state
		return (
			<Wrapper>
				<heaeder>
					<div>Logo</div>
					<h1>Welcome</h1>
				</heaeder>
				<hr />

				<form>
					<input type='text' />
					<button>Add item</button>
				</form>
				<hr />
				<select>
					<option value='films'>Films</option>
					<option value='books'>Books</option>
				</select>

				<h2>My films list</h2>
				<ol>
					<li>Mr.Bean</li>
				</ol>
				<h2>My books list</h2>
				<ol>
					{data.map(item => (
						<li key={item.id}>{item.title}</li>
					))}
				</ol>
			</Wrapper>
		)
	}
}

const Wrapper = styled.div`
	padding: 15px 40px;
`
