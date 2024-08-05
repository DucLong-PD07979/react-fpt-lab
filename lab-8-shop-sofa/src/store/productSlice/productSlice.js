import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as productApi from "../../api/productApi";

const initialState = {
    products: [],
    isLoading: "idle",
};

export const fetchAllProduct = createAsyncThunk(
    "product/fetchAllProduct",
    async (thunkAPI) => {
        const response = await productApi.getAllProduct();
        return response;
    }
);

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        loading: (state, action) => {
            state.isLoading = action.payload;
        },
        productFilterWithPrice: (state, action) => {
            const orderKey = action.payload;
            if (orderKey === "tăng") {
                const productFilter = state.products.sort(
                    (a, b) => a.price_discount - b.price_discount
                );
                state.products = productFilter;
                return;
            }

            if (orderKey === "giam") {
                const productFilter = state.products.sort(
                    (a, b) => b.price_discount - a.price_discount
                );
                state.products = productFilter;
                return;
            }
        },
        productFilterWithKey: (state, action) => {
            const productFilter = state.products.filter((product) => {
                return product.name.includes(action.payload);
            });
            state.products = productFilter;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllProduct.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchAllProduct.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchAllProduct.rejected, (state) => {
            state.products = [];
            state.isLoading = false;
        });
    },
});

export const { productFilterWithPrice, productFilterWithKey } = productSlice.actions;
export default productSlice.reducer;
