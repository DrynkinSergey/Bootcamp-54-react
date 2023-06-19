import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const elem = React.createElement('a', {
	href: '/',
	title: 'Hello',
	children: 'Link to:',
})
const div = React.createElement(
	'div',
	null,
	React.createElement('h1', null, 'Hello from H1')
)

const divJSX = (
	<div>
		<h1>Hello from H1 </h1>
	</div>
)

const elemJSX = (
	<a href='/' title='Hello'>
		Link to:
	</a>
)
const Header = () => {
	return (
		<header>
			<h1>Hello from React </h1>
		</header>
	)
}

const Content = () => {
	return (
		<main>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
				voluptatem soluta iusto laborum, fugiat inventore repellat tempore
				cupiditate necessitatibus iure voluptates rem ut et, sunt nam sit
				commodi vitae. Perspiciatis?
			</p>
		</main>
	)
}

const MyFirstComponent = () => {
	return (
		<div>
			<Header />
			<span>input</span>
			<Content />
			<button>Ok</button>
		</div>
	)
}
// <a href=''> TEXT </a>
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)
