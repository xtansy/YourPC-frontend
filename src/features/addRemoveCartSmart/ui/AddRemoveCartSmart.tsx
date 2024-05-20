import { FC } from "react";

import { useAppSelector } from "shared/model";

import { productInCartSelector } from "entities/cart";
import { type IProduct } from "entities/product";

import { AddToCartButton } from "features/addToCart";
import { ProductInCartCounter } from "features/productCounter";

interface AddRemoveCartSmartProps {
    item: IProduct;
}

export const AddRemoveCartSmart: FC<AddRemoveCartSmartProps> = ({ item }) => {
    const existItem = useAppSelector((state) =>
        productInCartSelector(state, item._id)
    );

    return existItem ? (
        <ProductInCartCounter product={existItem} />
    ) : (
        <AddToCartButton item={item} />
    );
};
