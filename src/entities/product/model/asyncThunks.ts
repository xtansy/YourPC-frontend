import { createAsyncThunk } from "@reduxjs/toolkit";

import { type IProduct } from "./types";
import { getProducts } from "shared/api";

export const getProductsAsync = createAsyncThunk<IProduct[]>(
    "product/getProducts",
    () => {
        return getProducts();
    }
);
