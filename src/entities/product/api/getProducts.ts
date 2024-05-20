import { type Response, api } from "shared/api";
import { EPathnameProducts } from "./constants";
import { getProductsUrlByPathname } from "../lib";
import { type IProduct } from "../model";

export const getProducts = async (pathname: EPathnameProducts) => {
    const { data } = await api.get<Response<IProduct[]>>(
        getProductsUrlByPathname(pathname)
    );
    return data.data;
};
