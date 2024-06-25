import { createAsyncThunk } from "@reduxjs/toolkit";

import { type IProduct } from "./types";
import {
    getProduct,
    addFeedback,
    type AddFeedbackProps,
} from "entities/product/api";

export const getProductAsync = createAsyncThunk<
    IProduct,
    { productId: IProduct["_id"] }
>("product/getProduct", ({ productId }) => {
    return getProduct(productId);
});

export const addFeedbacktAsync = createAsyncThunk<IProduct, AddFeedbackProps>(
    "product/addFeedback",
    (props) => {
        return addFeedback(props);
    }
);
