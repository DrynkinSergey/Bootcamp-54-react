export const initialState = {
	repos: [],
	loading: false,
	query: 'React',
	page: 1,
	error: null,
}
export const reposReducer = (state, action) => {
	switch (action.type) {
		case 'setLoading':
			return {
				...state,
				loading: action.payload,
			}
		case 'setRepos':
			return {
				...state,
				repos: action.payload,
			}
		case 'setQuery':
			return {
				...state,
				query: action.payload,
			}
		case 'setPage':
			return {
				...state,
				page: state.page + action.payload,
			}
		default:
			return state
	}
}
