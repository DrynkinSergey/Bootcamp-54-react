import { configureStore } from '@reduxjs/toolkit'
import { itemsReducer } from './itemSlice'
import { cartReducer } from './cartSlice'

export const store = configureStore({
	reducer: { itemsData: itemsReducer, cart: cartReducer },
})
