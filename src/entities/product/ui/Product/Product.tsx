import {
    Card,
    Box,
    CardMedia,
    Typography,
    CardActions,
    CardContent,
    CardHeader,
    Rating,
} from "@mui/material";

import { type IProduct } from "entities/product/model/types";
import { FC, ReactNode } from "react";

interface ProductProps {
    item: IProduct;
    bottomSlot?: ReactNode;
    headerSlot?: ReactNode;
}

export const Product: FC<ProductProps> = ({ item, bottomSlot, headerSlot }) => {
    return (
        <Card
            sx={{
                p: 1,
                minWidth: 350,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
            variant="outlined"
        >
            <CardHeader
                sx={{ padding: "0 5px 0 0" }}
                action={<>{headerSlot}</>}
            />
            <CardMedia
                component="img"
                image={item.img}
                sx={{ maxWidth: 400, maxHeight: 300, objectFit: "contain" }}
            />
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography variant="h5">{item.price} Р</Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Rating value={item.rate} name="read-only" readOnly />
                    <CardActions>{bottomSlot}</CardActions>
                </Box>
            </CardContent>
        </Card>
    );
};
