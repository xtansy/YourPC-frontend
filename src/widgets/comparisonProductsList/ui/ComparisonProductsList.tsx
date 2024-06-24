import { Fragment } from "react";
import { Card, CardContent, Stack, Typography } from "@mui/material";

import { useAppSelector } from "shared/model";

import { comparisonItemsSelector } from "entities/comparison";
import { Product } from "entities/product";
import { isAuthSelector } from "entities/user";

import { AddRemoveComparisonSmartButton } from "features/addRemoveComparisonSmart";
import { AddToFavIcon } from "features/addToFav";
import { AddRemoveCartSmart } from "features/addRemoveCartSmart";

export const ComparisonProductsList = () => {
    const items = useAppSelector(comparisonItemsSelector);
    const isAuth = useAppSelector(isAuthSelector);
    return (
        <Card>
            <CardContent>
                <Stack
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    {items.map((product, index) => {
                        return (
                            <Fragment key={product._id}>
                                <Product
                                    item={product}
                                    bottomSlot={
                                        isAuth ? (
                                            <AddRemoveCartSmart
                                                item={product}
                                            />
                                        ) : undefined
                                    }
                                    headerSlot={
                                        isAuth ? (
                                            <Stack alignItems="flex-end">
                                                <AddToFavIcon item={product} />
                                                <AddRemoveComparisonSmartButton
                                                    item={product}
                                                />
                                            </Stack>
                                        ) : undefined
                                    }
                                />
                                {index !== items.length - 1 && (
                                    <Typography variant="h3">VS</Typography>
                                )}
                            </Fragment>
                        );
                    })}
                </Stack>
            </CardContent>
        </Card>
    );
};
