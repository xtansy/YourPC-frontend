import { FC } from "react";
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

import { IProduct } from "entities/product/model/types";
import { BottomSlot } from "widgets/productsListWidget";
import { AddToFavIcon } from "features/addToFav";

interface ProductBigProps {
    item: IProduct;
}

export const ProductBig: FC<ProductBigProps> = ({ item }) => {
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
                        <Box>
                            <BottomSlot currentProduct={item} />
                        </Box>
                        <AddToFavIcon item={item} />
                    </Stack>
                </CardContent>
            </Stack>
            <CardActions></CardActions>
        </Card>
    );
};
