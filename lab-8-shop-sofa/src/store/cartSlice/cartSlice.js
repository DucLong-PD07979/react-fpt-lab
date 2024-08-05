import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as cartApi from "../../api/cartApi";

const initialState = {
    cartPoducts: {},
    isLoading: "idle",
    addProductToggle: false,
};

export const getCart = createAsyncThunk(
    "cart/getCart",
    async (id, thunkAPI) => {
        const response = await cartApi.getCartWithUserId(id);
        return response;
    }
);

export const addCartWithUser = createAsyncThunk(
    "cart/cartPost",
    async ({ id, ...props }, thunkAPI) => {
        const response = await cartApi.updateCartWithIdUser(id, { ...props });
        return response;
    }
);

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductToCartLocal: (state, action) => {
            const cart = localStorage.getItem("cart");
            if (cart) {
                const cartPasre = JSON.parse(cart);
                const product = action.payload;
                const productExist = cartPasre.find((item) => {
                    return item.id === product.id;
                });

                if (!productExist) {
                    const productInsert = {
                        ...product,
                        quanity: 1,
                        totalPrice: action.payload.price_discount,
                    };
                    cartPasre.push(productInsert);
                    localStorage.setItem("cart", JSON.stringify(cartPasre));
                }

                if (productExist) {
                    productExist.quanity = productExist.quanity + 1;
                    productExist.totalPrice =
                        productExist.quanity * productExist.price_discount;
                    localStorage.setItem("cart", JSON.stringify(cartPasre));
                }
                state.addProductToggle = !state.addProductToggle;
            } else {
                localStorage.setItem(
                    "cart",
                    JSON.stringify([
                        {
                            ...action.payload,
                            totalPrice: action.payload.price_discount,
                            quanity: 1,
                        },
                    ])
                );
                state.addProductToggle = !state.addProductToggle;
            }
        },
        removeProductItem: (state, action) => {
            const cartData = JSON.parse(localStorage.getItem("cart"));
            const productFilter = cartData.filter((cart) => {
                return cart.id !== action.payload.id;
            });
            if (productFilter) {
                localStorage.setItem("cart", JSON.stringify(productFilter));
            }
            state.addProductToggle = !state.addProductToggle;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCart.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCart.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cartPoducts = action.payload;
        });
        builder.addCase(getCart.rejected, (state) => {
            state.isLoading = false;
        });

        builder.addCase(addCartWithUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(addCartWithUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cartPoducts = action.payload;
            localStorage.removeItem("cart");
        });
        builder.addCase(addCartWithUser.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const { addProductToCartLocal, removeProductItem } = cartSlice.actions;
export default cartSlice.reducer;
