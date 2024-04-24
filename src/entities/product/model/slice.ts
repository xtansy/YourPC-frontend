import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getProductsAsync } from "./asyncThunks";
import { type IProduct, type ProductModel } from "./types";

const initialState: ProductModel = {
    products: [],
    isLoading: false,
    errorMessage: null,
};

export const productModel = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProductsAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProductsAsync.rejected, (state) => {
                state.isLoading = false;
                state.errorMessage = "Error with get of headphones";
            })
            .addCase(
                getProductsAsync.fulfilled,
                (state, action: PayloadAction<IProduct[]>) => {
                    state.isLoading = false;
                    const payload = action.payload;
                    state.products = payload;
                }
            );
    },
});

// export const {  } = headphoneModel.actions;
