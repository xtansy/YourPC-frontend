import { createAsyncThunk } from "@reduxjs/toolkit";

import { type IProduct } from "./types";
import { getProduct } from "entities/product/api";

export const getProductAsync = createAsyncThunk<
    IProduct,
    { productId: IProduct["_id"] }
>("product/getProduct", ({ productId }) => {
    return getProduct(productId);
});
