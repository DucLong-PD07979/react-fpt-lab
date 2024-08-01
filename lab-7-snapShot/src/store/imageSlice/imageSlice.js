import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    image: [],
    type: "all",
    categories: [],
};

export const imageSlice = createSlice({
    name: "image",
    initialState,
    reducers: {
        addImage: (state, action) => {
            state.image = action.payload;
        },
        addCate: (state, action) => {
            state.categories = action.payload;
        },
        getType: (state, action) => {
            state.type = action.payload;
        },
    },
});

export const { addImage, addCate, getType } = imageSlice.actions;
export default imageSlice.reducer;
