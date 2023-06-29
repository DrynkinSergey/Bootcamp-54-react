import React, {
	Component,
	useCallback,
	useEffect,
	useReducer,
	useState,
} from 'react'
import { GitHeader } from './GitHeader'
import { GitReposList } from './GitReposList'
import { fetchRepos } from '../../services/api'
import { FidgetSpinner } from 'react-loader-spinner'
import { styled } from 'styled-components'
import { toast } from 'react-toastify'
import { initialState, reposReducer } from '../../helpers/reposReducer'

export const GitRepos = ({ user }) => {
	const [state, dispatch] = useReducer(reposReducer, initialState)
	const { page, query, repos, loading, error } = state
	const fetchData = useCallback(async () => {
		// setLoading(true)
		dispatch({ type: 'setLoading', payload: true })
		try {
			const { data } = await fetchRepos({
				q: query,
				page,
			})
			dispatch({ type: 'setRepos', payload: data.items })
			// setRepos(data.items)
		} catch (error) {
			toast.error(error.message)
		} finally {
			// setLoading(false)
			dispatch({ type: 'setLoading', payload: false })
		}
	}, [page, query])
	useEffect(() => {
		fetchData()
	}, [fetchData])

	const handleChangeQuery = query => {
		// this.setState({ query })
		// setQuery(query)
		dispatch({ type: 'setQuery', payload: query })
	}

	const handlePrevBtnClick = () => {
		// if (this.state.page > 1) {
		// 	this.setState(prevState => ({ page: prevState.page - 1 }))
		// }
		if (page > 1) {
			// setPage(prev => prev - 1)
			dispatch({ type: 'setPage', payload: -1 })
		}
	}
	const handleNextBtnClick = () => {
		// this.setState(prevState => ({ page: prevState.page + 1 }))
		// setPage(prev => prev + 1)
		dispatch({ type: 'setPage', payload: 1 })
	}
	return (
		<>
			<GitHeader handleChangeQuery={handleChangeQuery} />
			<div>
				<button disabled={page === 1} onClick={handlePrevBtnClick}>
					Prev
				</button>
				<button onClick={handleNextBtnClick}>Next</button>
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
				<GitReposList user={user} repos={repos} />
			)}
		</>
	)
}

const Flex = styled.div`
	min-height: 60vh;
	display: flex;
	justify-content: center;
	align-items: center;
`
