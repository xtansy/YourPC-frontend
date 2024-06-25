import { FC, ReactNode } from "react";
import { Grid } from "@mui/material";

import { type IProduct, Product } from "entities/product/";

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
        <Grid container spacing={4}>
            {items.map((item) => {
                return (
                    <Grid key={item._id} item md={4} xs={8}>
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
                    </Grid>
                );
            })}
        </Grid>
    );
};
