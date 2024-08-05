import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice/productSlice";
import cartReducer from "./cartSlice/cartSlice";

export const store = configureStore({
    reducer: {
        productReducer,
        cartReducer,
    },
});
