import React from 'react'
import ReactDOM from 'react-dom/client'

const elem = React.createElement('a', {
	href: '/',
	title: 'Hello',
	children: 'Link to:',
})

console.log(elem)
// <a href=''> TEXT </a>
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(elem)

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<App />)
