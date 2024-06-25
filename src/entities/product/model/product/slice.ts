import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getProductAsync, addFeedbacktAsync } from "./asyncThunks";
import { type IProduct, type ProductModel } from "./types";

const initialState: ProductModel = {
    product: null,
    isLoading: false,
    errorMessage: null,
};

export const productModel = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProductAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProductAsync.rejected, (state) => {
                state.isLoading = false;
                state.errorMessage = "Error with get of product";
            })
            .addCase(
                getProductAsync.fulfilled,
                (state, action: PayloadAction<IProduct>) => {
                    state.isLoading = false;
                    const payload = action.payload;
                    state.product = payload;
                }
            )

            .addCase(
                addFeedbacktAsync.fulfilled,
                (state, { payload }: PayloadAction<IProduct>) => {
                    state.product = payload;
                }
            );
    },
});

// export const {  } = headphoneModel.actions;
