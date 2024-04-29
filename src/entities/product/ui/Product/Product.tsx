import {
    Card,
    Box,
    CardMedia,
    Typography,
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
                width: "100%",
                height: "100%",
                maxWidth: 400,
                maxHeight: 450,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
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
                        gap: "15px",
                    }}
                >
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography variant="h6">{item.price} ₽</Typography>
                </Box>

                <Box
                    sx={{
                        minHeight: "51px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Rating value={item.rate} name="read-only" readOnly />
                    <Box>{bottomSlot}</Box>
                </Box>
            </CardContent>
        </Card>
    );
};
