import { type IProduct } from "entities/product/@x/cart";

export interface CartItem extends IProduct {
    count: number;
}

export interface CartModel {
    items: CartItem[];
}
