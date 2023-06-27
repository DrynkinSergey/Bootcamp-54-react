import React, { Component } from 'react'
import { GitHeader } from './GitHeader'
import { GitReposList } from './GitReposList'
import { fetchRepos } from '../../services/api'
import { FidgetSpinner } from 'react-loader-spinner'
import { styled } from 'styled-components'
import { toast } from 'react-toastify'

export class GitRepos extends Component {
	state = {
		repos: [],
		loading: false,
		error: null,
		query: 'React',
		page: 1,
	}
	componentDidMount() {
		this.fetchData()
	}
	componentDidUpdate(_, prevState) {
		const { query, page } = this.state
		if (query !== prevState.query || page !== prevState.page) {
			this.fetchData()
		}
	}

	fetchData = async () => {
		this.setState({ loading: true })
		try {
			const { data } = await fetchRepos({
				q: this.state.query,
				page: this.state.page,
			})
			this.setState({ repos: data.items })
		} catch (error) {
			toast.error(error.message)
		} finally {
			this.setState({ loading: false })
		}
	}
	handleChangeQuery = query => {
		this.setState({ query })
	}

	handlePrevBtnClick = () => {
		if (this.state.page > 1) {
			this.setState(prevState => ({ page: prevState.page - 1 }))
		}
	}
	handleNextBtnClick = () => {
		this.setState(prevState => ({ page: prevState.page + 1 }))
	}
	render() {
		const { loading, page } = this.state
		return (
			<>
				<GitHeader handleChangeQuery={this.handleChangeQuery} />
				<div>
					<button disabled={page === 1} onClick={this.handlePrevBtnClick}>
						Prev
					</button>
					<button onClick={this.handleNextBtnClick}>Next</button>
				</div>
				{loading ? (
					<Flex>
						<FidgetSpinner
							visible={true}
							height='80'
							width='80'
							ariaLabel='dna-loading'
							wrapperStyle={{}}
							wrapperClass='dna-wrapper'
							ballColors={['#ff0000', '#00ff00', '#0000ff']}
							backgroundColor='#F4442E'
						/>
						<h1>Loading...</h1>
					</Flex>
				) : (
					<GitReposList repos={this.state.repos} />
				)}
			</>
		)
	}
}

const Flex = styled.div`
	min-height: 60vh;
	display: flex;
	justify-content: center;
	align-items: center;
`
