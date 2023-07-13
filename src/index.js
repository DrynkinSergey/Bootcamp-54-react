import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
			<ToastContainer autoClose={1000} />
		</PersistGate>
	</Provider>
)
