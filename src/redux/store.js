import { combineReducers, createStore } from 'redux'

import { devToolsEnhancer } from '@redux-devtools/extension'
import { counterReducer } from './counter/slice'
import { todoReducer } from './todoList/slice'
import { configureStore } from '@reduxjs/toolkit'
// const rootReducer = combineReducers({
// 	counter: counterReducer,
// 	todoList: todoReducer,
// })
// const enhancer = devToolsEnhancer()
// export const store = createStore(rootReducer, enhancer)

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		todoList: todoReducer,
	},
	devTools: process.env.NODE_ENV !== 'production', //true false
})

// console.log(process.env)
