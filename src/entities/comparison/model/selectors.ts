import { type IProduct } from "entities/product/@x/favorites";

import { createSelector } from "@reduxjs/toolkit";

export const comparisonItemsSelector = (state: RootState) =>
    state.comparison.items;

export const productInComparisonSelector = createSelector(
    comparisonItemsSelector,
    (_: RootState, productId: IProduct["_id"]) => {
        return productId;
    },
    (items: IProduct[], productId: IProduct["_id"]) => {
        return items.find((item) => item._id === productId);
    }
);

export const isCanAddProductToComparisonSelector = createSelector(
    comparisonItemsSelector,
    (_: RootState, productType: IProduct["type"]) => {
        return productType;
    },
    (items: IProduct[], productType: IProduct["type"]) => {
        if (items.length === 0) {
            return true;
        }
        return items[0].type === productType;
    }
);
