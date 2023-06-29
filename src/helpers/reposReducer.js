// 1. Створення початкового значення (инит стейт)
// 2. Створення функції редюсер
// 3. Виклик юз редюсера
// 4. Використання діспатча

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
