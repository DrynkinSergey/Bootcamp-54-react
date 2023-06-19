import { Header } from './components/Header/Header'
import { Section } from './components/Section/Section'

function App() {
	const moviesData = [
		{ id: 0, title: 'Terminator' },
		{ id: 1, title: 'Dr. House' },
		{ id: 2, title: 'Dr. Faust' },
	]

	const goodsData = [
		{ id: 0, title: 'Cabbage' },
		{ id: 1, title: 'Potato' },
		{ id: 2, title: 'Whiskey' },
	]
	const isOnline = false
	return (
		<div>
			<Header />
			{/* {isOnline && <h1>Welcome back, my friend</h1>} */}
			{isOnline ? <h1>Welcome back, my friend</h1> : <h1>Lets login</h1>}
			<Section data={moviesData} id='movies' />
			<Section data={goodsData} title='Goods Section' id='movies' />
		</div>
	)
}

export default App
