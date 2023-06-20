import usersData from './assets/users.json'
import { Users } from './components/Users/Users'

function App() {
	return (
		<>
			<Users users={usersData} />

			<h1 className='wrapper'>Hello from React</h1>
		</>
	)
}

export default App
