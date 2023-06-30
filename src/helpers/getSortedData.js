export const getSortedData = ({ type, users }) => {
	console.log('RENDER')
	switch (type) {
		case 'ASC':
			return [...users].sort((a, b) => (a.name - b.name ? 1 : -1))
		case 'DESC':
			return [...users].sort((a, b) => (a.name - b.name ? -1 : 1))
		default:
			return users
	}
}
