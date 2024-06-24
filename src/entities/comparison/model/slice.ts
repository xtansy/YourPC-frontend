import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import { type IProduct } from "entities/product/@x/comparison";
import { type ComparisonModel } from "./types";

const initialState: ComparisonModel = {
    items: [],
};

export const comparisonModel = createSlice({
    name: "comparison",
    initialState,
    reducers: {
        clearComparisonData: (state) => {
            state.items = [];
        },
        addItem: (state, { payload }: PayloadAction<IProduct>) => {
            if (state.items.length === 0) {
                state.items.push(payload);
                return;
            }
            if (state.items[0].type === payload.type) {
                state.items.push(payload);
            }
        },
        removeItem: (state, { payload }: PayloadAction<IProduct["_id"]>) => {
            state.items = state.items.filter((item) => item._id !== payload);
        },
    },
});

export const { clearComparisonData, addItem, removeItem } =
    comparisonModel.actions;
