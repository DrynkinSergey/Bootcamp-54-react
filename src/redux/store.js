import { combineReducers, createStore } from 'redux'
import { counterReducer } from './counter/reducer'
import { todoReducer } from './todoList/reducer'

const rootReducer = combineReducers({
	counter: counterReducer,
	todoList: todoReducer,
})

export const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
