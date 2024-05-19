export const productsSelector = (state: RootState) => state.product.products;

export const productsIsLoadingSelector = (state: RootState) =>
    state.product.isLoading;
