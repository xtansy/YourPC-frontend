import css from "./MainPage.module.css";

import { useEffect } from "react";

import { getProductsAsync } from "entities/product";
import { ProductsListWidget } from "widgets/productsListWidget";
import {
    // wiredHeadphonesSelector,
    wirelessHeadphonesSelector,
} from "entities/product";
import { useAppSelector, useAppDispatch } from "shared/model";

export const MainPage = () => {
    const dispatch = useAppDispatch();
    // const wiredHeadphones = useAppSelector(wiredHeadphonesSelector);
    const wirelessHeadphones = useAppSelector(wirelessHeadphonesSelector);

    useEffect(() => {
        dispatch(getProductsAsync());
    }, []);

    return (
        <div className={css.main}>
            {/* <ProductsList title="Товары" items={wiredHeadphones} /> */}
            <ProductsListWidget title="Товары" items={wirelessHeadphones} />
        </div>
    );
};
