import { configureStore } from "@reduxjs/toolkit";
import user from './slices/user'
import userApi from './userApiSlice/userApiSlice'

const store = configureStore({
    reducer:{
        user,
        userApi
    }
})

export default store