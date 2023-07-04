import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Global } from './Styled/Global'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<>
		<App />
		<Global />
		<ToastContainer autoClose={1000} />
	</>
)
