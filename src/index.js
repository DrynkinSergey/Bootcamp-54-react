import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<>
		<App />
		<ToastContainer autoClose={1000} />
	</>
)
