import css from "./ProductList.module.css";

import { type IProduct } from "entities/product/model/types";

import { Product } from "entities/product";
import { FC, ReactNode } from "react";

interface ProductListProps {
    items: IProduct[];
    renderProductHeaderSlot?: (item: IProduct) => ReactNode;
    renderProductBottomSlot?: (item: IProduct) => ReactNode;
}

export const ProductList: FC<ProductListProps> = ({
    items,
    renderProductHeaderSlot,
    renderProductBottomSlot,
}) => {
    /**
     * ✅ FSD Best practice
     *
     * Receive product actions (add to cart/favorites)
     * to render-prop to avoid entity cross-import
     */
    return (
        <div className={css.list}>
            {items.map((item) => {
                return (
                    <Product
                        item={item}
                        headerSlot={
                            renderProductHeaderSlot &&
                            renderProductHeaderSlot(item)
                        }
                        bottomSlot={
                            renderProductBottomSlot &&
                            renderProductBottomSlot(item)
                        }
                    />
                );
            })}
        </div>
    );
};
