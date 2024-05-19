import { useLocation } from "react-router-dom";

import { ProductsListWidget } from "widgets/productsListWidget";
import {
    EPathnameProducts,
    getProductsAsync,
    productsSelector,
} from "entities/product";
import { useAppDispatch, useAppSelector } from "shared/model";
import { useEffect } from "react";

const getTitle = (pathname: EPathnameProducts) => {
    const obj = {
        [EPathnameProducts.processors]: "Процессоры",
        [EPathnameProducts.products]: "Продукты",
        [EPathnameProducts.motherboards]: "Материнские платы",
        [EPathnameProducts.videocards]: "Видеокарты",
        [EPathnameProducts.rams]: "Оперативная память",
    };

    return obj[pathname];
};

export const ProductsPage = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(productsSelector);
    const pathname = useLocation().pathname as EPathnameProducts;

    useEffect(() => {
        dispatch(getProductsAsync({ pathname }));
    }, [pathname]);

    return (
        <>
            <ProductsListWidget title={getTitle(pathname)} items={products} />
        </>
    );
};
