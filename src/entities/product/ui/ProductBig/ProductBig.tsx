import { FC, ReactNode } from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Rating,
    Stack,
    Typography,
    CardActions,
    Box,
} from "@mui/material";

import { type IProduct } from "entities/product";

interface ProductBigProps {
    item: IProduct;
    addToCartActionSlot?: ReactNode;
    addToFavActionSlot?: ReactNode;
    addToComparisonActionSlot?: ReactNode;
}

export const ProductBig: FC<ProductBigProps> = ({
    item,
    addToCartActionSlot,
    addToFavActionSlot,
    addToComparisonActionSlot,
}) => {
    return (
        <Card sx={{ p: 5 }}>
            <Stack direction="row" spacing={10}>
                <CardMedia
                    component="img"
                    sx={{ maxWidth: 300, maxHeight: 400, objectFit: "contain" }}
                    image={item.img}
                    alt="Product image"
                />
                <CardContent>
                    {addToFavActionSlot}
                    <Stack spacing={5}>
                        <Typography variant="h4">{item.title}</Typography>
                        <Typography variant="h5">
                            Цена: {item.price} Р
                        </Typography>
                        <Rating
                            size="large"
                            value={item.rate}
                            name="read-only"
                            readOnly
                        />
                    </Stack>
                    <Stack
                        sx={{ marginTop: "20px" }}
                        direction="row"
                        spacing={2}
                        alignItems="center"
                    >
                        <Box>{addToCartActionSlot}</Box>
                        {addToComparisonActionSlot}
                    </Stack>
                </CardContent>
            </Stack>
            <CardActions></CardActions>
        </Card>
    );
};
