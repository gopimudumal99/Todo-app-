import {configureStore,combineReducers} from '@reduxjs/toolkit'
import cartReducer from './createSlice'

const reducer = combineReducers({
    cart:cartReducer
})

const store = configureStore({
    reducer:reducer
})

export default store