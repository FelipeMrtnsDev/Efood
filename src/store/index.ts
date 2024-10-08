import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import cartReducer from './reducer/cartReducer'

export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger)
})

export type RootReducer = ReturnType<typeof store.getState>