export const productSelector = (state: RootState) => state.product.product;

export const productIsLoadingSelector = (state: RootState) =>
    state.product.isLoading;
