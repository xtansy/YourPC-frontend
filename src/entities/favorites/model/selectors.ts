import { type IProduct } from "entities/product/@x/favorites";

import { createSelector } from "@reduxjs/toolkit";

export const favoritesItemsSelector = (state: RootState) =>
    state.favorites.items;

export const productInFavoritesSelector = createSelector(
    favoritesItemsSelector,
    (_: RootState, productId: IProduct["_id"]) => {
        return productId;
    },
    (items: IProduct[], productId: IProduct["_id"]) => {
        return items.find((item) => item._id === productId);
    }
);
