import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import { type CartModel } from "./types";
import { type IProduct } from "entities/product/@x/cart";

const initialState: CartModel = {
    items: [],
};

export const cartModel = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCartData: (state) => {
            state.items = [];
        },
        addItem: (state, { payload }: PayloadAction<IProduct>) => {
            const existItem = state.items.find(
                (item) => item._id === payload._id
            );
            if (existItem) {
                existItem.count++;
                return;
            }
            state.items.push({ count: 1, ...payload });
        },
        minusItem: (state, { payload }: PayloadAction<IProduct["_id"]>) => {
            const item = state.items.find(
                (cartItem) => cartItem._id === payload
            );
            if (item && item.count > 1) {
                item.count--;
            }
        },
        removeItem: (state, { payload }: PayloadAction<IProduct["_id"]>) => {
            state.items = state.items.filter((item) => item._id !== payload);
        },
    },
});

export const { addItem, minusItem, removeItem, clearCartData } =
    cartModel.actions;
