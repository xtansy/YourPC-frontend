export const productsSelector = (state: RootState) => state.products.products;

export const productsIsLoadingSelector = (state: RootState) =>
    state.products.isLoading;
