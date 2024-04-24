import { configureStore } from '@reduxjs/toolkit'
import toggleSlice from './features/toggleDetail'
import cartSlice from './features/cartSlice'
import searchSlice from './features/searchSlice'
import favoriteSlice from './features/favoriteSlice'

export const store = configureStore({
  reducer: {
    toggleDetail: toggleSlice,
    cart: cartSlice,
    search: searchSlice,
    favorite: favoriteSlice
  },
})