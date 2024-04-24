import css from "./CartPage.module.css";

import { useAppSelector } from "shared/model";
import { cartItemsSelector, cartTotalPriceSelector } from "entities/cart";

import { Summary } from "../Summary/Summary";
import { CartItemsList } from "../CartItemsList/CartItemsList";

export const CartPage = () => {
	const cartItems = useAppSelector(cartItemsSelector);
	const totalPrice = useAppSelector(cartTotalPriceSelector);

	return (
		<div className={css.cart}>
			<h2 className={css.title}>Корзина</h2>
			<div className={css.content}>
				<CartItemsList items={cartItems} />
				<Summary totalPrice={totalPrice} />
			</div>
		</div>
	);
};
