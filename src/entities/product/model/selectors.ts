import { createSelector } from "@reduxjs/toolkit";

export const productsSelector = (state: RootState) => state.product.products;

export const productsIsLoadingSelector = (state: RootState) =>
    state.product.isLoading;

export const wirelessHeadphonesSelector = createSelector(
    productsSelector,
    (headphones) => headphones.filter((item) => item.type === "wireless")
);

export const wiredHeadphonesSelector = createSelector(
    productsSelector,
    (headphones) => headphones.filter((item) => item.type === "wired")
);
