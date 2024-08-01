import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./imageSlice/imageSlice";

export const store = configureStore({
    reducer: {
        imageReducer,
    },
});
