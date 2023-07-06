import { combineReducers, createStore } from 'redux'

import { todoReducer } from './todoList/reducer'
import { devToolsEnhancer } from '@redux-devtools/extension'
import { counterReducer } from './counter/slice'
const rootReducer = combineReducers({
	counter: counterReducer,
	todoList: todoReducer,
})
const enhancer = devToolsEnhancer()
export const store = createStore(rootReducer, enhancer)
