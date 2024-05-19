import { createAsyncThunk } from "@reduxjs/toolkit";

import { type IProduct } from "./types";
import { EPathnameProducts } from "../api";
import { getProducts } from "../api";

export const getProductsAsync = createAsyncThunk<
    IProduct[],
    { pathname: EPathnameProducts }
>("product/getProducts", ({ pathname }) => {
    console.log("@pathname", pathname);
    return getProducts(pathname);
});
