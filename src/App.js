import usersData from './assets/users.json'
import { Users } from './components/Users/Users'

function App() {
	return (
		<div>
			<Users users={usersData} />

			<h1 className='card'>Hello from React</h1>
		</div>
	)
}

export default App
