import { configureStore } from "@reduxjs/toolkit";
import emailReducer from './Email';
import paginationReducer from './Pagination'
const Store = configureStore({
    reducer:{
        email:emailReducer,
        pagination: paginationReducer,
        
    }
})

export default Store;