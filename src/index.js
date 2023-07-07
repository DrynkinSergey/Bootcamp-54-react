import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/'
import { PersistGate } from 'redux-persist/integration/react'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<BrowserRouter>
		<PersistGate loading={null} persistor={persistor}>
			<Provider store={store}>
				<App />
				<ToastContainer autoClose={1000} />
			</Provider>
		</PersistGate>
	</BrowserRouter>
)
