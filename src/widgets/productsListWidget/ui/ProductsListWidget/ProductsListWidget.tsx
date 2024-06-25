import { FC } from "react";

import { Typography, Box, Stack } from "@mui/material";

import { useAppSelector } from "shared/model";

import { type IProduct, ProductList } from "entities/product";
import { isAuthSelector } from "entities/user";

import { AddToFavIcon } from "features/addToFav";
import { AddRemoveCartSmart } from "features/addRemoveCartSmart";
import { AddRemoveComparisonSmartButton } from "features/addRemoveComparisonSmart";

interface ProductsListWidgetProps {
    title: string;
    items: IProduct[];
}

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
                              return <AddRemoveCartSmart item={item} />;
                          }
                        : undefined
                }
                renderProductHeaderSlot={(item: IProduct) => {
                    return (
                        <Stack alignItems="flex-end">
                            {isAuth && <AddToFavIcon item={item} />}
                            <AddRemoveComparisonSmartButton item={item} />
                        </Stack>
                    );
                }}
            />
        </Box>
    );
};
