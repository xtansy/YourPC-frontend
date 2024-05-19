import Box from "@mui/material/Box";

import { useAppSelector } from "shared/model";
import { Typography } from "@mui/material";

import { type IProduct, ProductList } from "entities/product";
import { isAuthSelector } from "entities/user";
import { productInCartSelector } from "entities/cart";

import { ProductInCartCounter } from "features/productCounter";
import { AddToCartButton } from "features/addToCart";
import { AddToFavIcon } from "features/addToFav";
import { FC } from "react";

interface ProductsListWidgetProps {
    title: string;
    items: IProduct[];
}

interface BottomSlotProps {
    currentProduct: IProduct;
}

export const BottomSlot: FC<BottomSlotProps> = ({ currentProduct }) => {
    const existItem = useAppSelector((state) =>
        productInCartSelector(state, currentProduct._id)
    );

    return existItem ? (
        <ProductInCartCounter product={existItem} />
    ) : (
        <AddToCartButton item={currentProduct} />
    );
};

export const ProductsListWidget: FC<ProductsListWidgetProps> = ({
    title,
    items,
}) => {
    const isAuth = useAppSelector(isAuthSelector);

    return (
        <Box>
            <Typography
                variant="h4"
                sx={{ marginTop: "28px", marginBottom: "30px" }}
            >
                {title}
            </Typography>
            <ProductList
                items={items}
                renderProductBottomSlot={
                    isAuth
                        ? (item: IProduct) => {
                              return <BottomSlot currentProduct={item} />;
                          }
                        : undefined
                }
                renderProductHeaderSlot={
                    isAuth
                        ? (item: IProduct) => {
                              return <AddToFavIcon item={item} />;
                          }
                        : undefined
                }
            />
        </Box>
    );
};
