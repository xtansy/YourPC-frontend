import { EPathnameProducts } from "../api";
import { config } from "shared/api";

const { paths } = config;

export const getProductsUrlByPathname = (pathname: EPathnameProducts) => {
    const obj = {
        [EPathnameProducts.processors]: paths.processors.getAll,
        [EPathnameProducts.products]: paths.products.getAll,
        [EPathnameProducts.motherboards]: paths.motherboards.getAll,
        [EPathnameProducts.videocards]: paths.videocards.getAll,
        [EPathnameProducts.rams]: paths.rams.getAll,
    };

    return obj[pathname];
};
