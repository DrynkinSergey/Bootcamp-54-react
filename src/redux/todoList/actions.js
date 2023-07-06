import { createAction } from '@reduxjs/toolkit'

export const addTodo = createAction('todos/addTodo', todo => {
	return {
		payload: {
			id: crypto.randomUUID(),
			completed: false,
			todo: todo,
		},
	}
})
export const toggleTodo = createAction('todos/toggleTodo')
export const deleteTodo = createAction('todos/deleteTodo')
export const deleteMarked = createAction('todos/deleteMarked')
export const setFilter = createAction('todos/setFilter')
