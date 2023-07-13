import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<Provider store={store}>
		<App />
		<ToastContainer autoClose={1000} />
	</Provider>
)
