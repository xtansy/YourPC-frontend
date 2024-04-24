import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type FavoritesModel } from "./types";
import { type IProduct } from "entities/product/@x/favorites";

const initialState: FavoritesModel = {
    items: [],
};

export const favoritesModel = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addItem: (state, { payload }: PayloadAction<IProduct>) => {
            state.items.push(payload);
        },
        removeItem: (state, { payload }: PayloadAction<IProduct["_id"]>) => {
            state.items = state.items.filter((item) => item._id !== payload);
        },
    },
});

export const { addItem, removeItem } = favoritesModel.actions;
