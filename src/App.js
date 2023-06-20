import { Header } from './components/Header/Header'
import { Modal } from './components/Modal/Modal'
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
		{ id: 4, title: 'Fish' },
	]
	return (
		<div>
			<Header />
			<Section data={moviesData} id='movies' />
			<Section data={goodsData} title='Goods Section' id='movies' />
			<hr />
			<Modal>
				<h1>Hello</h1>
				<button>OK</button>
			</Modal>

			<Modal>
				<h1>Продати гараж</h1>
				<button>Зателефонувати!</button>
			</Modal>

			<Modal>
				<img
					src='https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667'
					alt=''
				/>
			</Modal>
		</div>
	)
}

export default App
