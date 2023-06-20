import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  :root{
    --main-color: red;
  }

  body{
    margin:0;
    padding:0;
  }
  p{
    padding-left:20px;
  }
  .wrapper{
    color:var(--main-color)

  }
`

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<>
		<App />
		<Global />
	</>
)
