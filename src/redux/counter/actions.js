import { createAction } from '@reduxjs/toolkit'

export const increment = createAction('counter/increment')
export const decrement = createAction('counter/decrement')
export const reset = createAction('counter/reset')
export const changeStep = createAction('counter/changeStep')

// console.log(increment.toString())
// console.log(increment.type)
// export const increment = () => {
// 	return { type: INCREMENT }
// }
// export const decrement = () => {
// 	return { type: DECREMENT }
// }
// export const reset = () => {
// 	return { type: RESET }
// }
// export const changeStep = step => {
// 	return { type: CHANGE_STEP, payload: Number(step) }
// }
