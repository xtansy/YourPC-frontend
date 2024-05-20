import { type Response, api } from "shared/api";
import { type IProduct } from "../model/product/types";
import { config } from "shared/api";

const { paths } = config;

export const getProduct = async (productId: IProduct["_id"]) => {
    const { data } = await api.get<Response<IProduct>>(
        paths.products.product(productId)
    );
    return data.data;
};
