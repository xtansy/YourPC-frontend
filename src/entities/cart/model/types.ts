import { type IProduct } from "entities/product/@x/cart";

export type CartItem = IProduct & { count: number };

export interface CartModel {
    items: CartItem[];
}
