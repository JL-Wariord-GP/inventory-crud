import {configureStore} from "@reduxjs/toolkit";
import nameProduct from './slices/nameProduct.slice'

export default configureStore({
    reducer: {
        nameProduct
    }
})