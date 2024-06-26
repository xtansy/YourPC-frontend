import { FC, ReactNode } from "react";

import { useNavigate } from "react-router-dom";

import {
    Card,
    Box,
    CardMedia,
    Typography,
    CardContent,
    CardHeader,
    Rating,
} from "@mui/material";
import { type IProduct } from "entities/product";

interface ProductProps {
    item: IProduct;
    bottomSlot?: ReactNode;
    headerSlot?: ReactNode;
}

export const Product: FC<ProductProps> = ({ item, bottomSlot, headerSlot }) => {
    const navigate = useNavigate();

    const onClickProduct = () => {
        navigate(`/product/${item._id}`);
    };

    return (
        <Card
            onClick={onClickProduct}
            sx={{
                cursor: "pointer",
                p: 1,
                width: "100%",
                maxWidth: 400,
                display: "flex",
                flexDirection: "column",

                ":hover": {
                    border: "1px solid rgba(51, 153, 255, 0.25)",
                },
            }}
        >
            <CardHeader
                sx={{ padding: "0 5px 0 0", marginBottom: "5px" }}
                action={<>{headerSlot}</>}
            />
            <CardMedia
                component="img"
                image={item.img}
                sx={{
                    maxWidth: 400,
                    maxHeight: 300,
                    objectFit: "contain",
                    minHeight: 300,
                }}
            />
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "15px",
                        minHeight: "65px",
                    }}
                >
                    <Box sx={{ maxWidth: "218px" }}>
                        <Typography variant="h5">{item.title}</Typography>
                    </Box>
                    <Typography variant="h6">{item.price} ₽</Typography>
                </Box>

                <Box
                    sx={{
                        marginTop: "10px",
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
