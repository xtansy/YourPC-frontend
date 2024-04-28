import css from "./CartPage.module.css";

import { useAppSelector } from "shared/model";
import { cartItemsSelector, cartTotalPriceSelector } from "entities/cart";

import { Summary } from "../Summary/Summary";
import { CardListWidget } from "widgets/cardListWidget";
import { Typography } from "@mui/material";

export const CartPage = () => {
    const cartItems = useAppSelector(cartItemsSelector);
    const totalPrice = useAppSelector(cartTotalPriceSelector);

    return (
        <div className={css.cart}>
            <Typography variant="h4">Корзина</Typography>
            <div className={css.content}>
                <CardListWidget items={cartItems} />
                <Summary totalPrice={totalPrice} />
            </div>
        </div>
    );
};
