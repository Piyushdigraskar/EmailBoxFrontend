import { configureStore } from "@reduxjs/toolkit";
import emailReducer from './Email';
const Store = configureStore({
    reducer:{
        email:emailReducer
    }
})

export default Store;