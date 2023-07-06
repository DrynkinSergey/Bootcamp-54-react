import { combineReducers, createStore } from 'redux'

import { devToolsEnhancer } from '@redux-devtools/extension'
import { counterReducer } from './counter/slice'
import { todoReducer } from './todoList/slice'
const rootReducer = combineReducers({
	counter: counterReducer,
	todoList: todoReducer,
})
const enhancer = devToolsEnhancer()
export const store = createStore(rootReducer, enhancer)
