import { createAsyncThunk } from "@reduxjs/toolkit";

import { EPathnameProducts, getProducts } from "entities/product/api";
import { type IProduct } from "../product/types";

export const getProductsAsync = createAsyncThunk<
    IProduct[],
    { pathname: EPathnameProducts }
>("products/getProducts", ({ pathname }) => {
    return getProducts(pathname);
});
