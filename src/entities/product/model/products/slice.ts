import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getProductsAsync } from "./asyncThunks";
import { type ProductsModel } from "./types";
import { type IProduct } from "../product/types";

const initialState: ProductsModel = {
    products: [],
    isLoading: false,
    errorMessage: null,
};

export const productsModel = createSlice({
    name: "products",
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
