import {
    Card,
    Box,
    CardMedia,
    Typography,
    CardActions,
    CardContent,
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
                alignItems: "center",
                justifyContent: "space-between",
            }}
            variant="outlined"
        >
            <CardMedia
                component="img"
                image={item.img}
                sx={{ maxWidth: 300, maxHeight: 400, objectFit: "contain" }}
            />
            <CardContent>
                {headerSlot}
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
                    <CardActions>{bottomSlot && bottomSlot}</CardActions>
                </Box>
            </CardContent>
        </Card>
    );
};
