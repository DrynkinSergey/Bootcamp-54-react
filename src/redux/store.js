import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counter/reducer'
import { todoReducer } from './todoList/reducer'
import { devToolsEnhancer } from '@redux-devtools/extension'
const rootReducer = combineReducers({
	counter: counterReducer,
	todoList: todoReducer,
})
const enhancer = devToolsEnhancer()
export const store = createStore(rootReducer, enhancer)
