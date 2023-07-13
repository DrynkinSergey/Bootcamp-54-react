import { createSelector } from '@reduxjs/toolkit'

export const selectTodos = state => state.todoList.tasks
export const selectLoading = state => state.todoList.loading
export const selectError = state => state.todoList.error

export const selectTheme = state => state.theme
export const selectFilter = state => state.filter

// export const selectFilteredData = state => {
// 	const tasks = selectTodos(state)
// 	const filter = selectFilter(state)
// 	console.log('filtered')
// 	switch (filter) {
// 		case 'Active':
// 			return tasks.filter(task => !task.completed)
// 		case 'Completed':
// 			return tasks.filter(task => task.completed)
// 		default:
// 			return tasks
// 	}
// }
export const selectFilteredData = createSelector(
	[selectTodos, selectFilter],

	(todos, filter) => {
		switch (filter) {
			case 'Active':
				return todos.filter(task => !task.completed)
			case 'Completed':
				return todos.filter(task => task.completed)
			default:
				return todos
		}
	}
)

// export const selectUncompletedTodo = state => {
// console.log('calc')
// const todos = selectTodos(state)

// return todos.reduce(
// 	(total, currentTodo) => (currentTodo.completed ? total : total + 1),
// 	0
// )
// }
export const selectUncompletedTodo = createSelector([selectTodos], todos => {
	return todos.reduce(
		(total, currentTodo) => (currentTodo.completed ? total : total + 1),
		0
	)
})
