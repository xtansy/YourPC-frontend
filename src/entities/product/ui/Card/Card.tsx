import { FC, ReactNode } from "react";

import { type IProduct } from "entities/product/model/types";
import { Box, Paper, Typography } from "@mui/material";

interface CardProps {
    item: IProduct;
    actionSlot?: ReactNode;
    bottomSlot?: ReactNode;
}

export const Card: FC<CardProps> = ({ item, actionSlot, bottomSlot }) => {
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "700px",
                position: "relative",
            }}
        >
            <Paper sx={{ padding: "16px" }}>
                {actionSlot && (
                    <Box
                        sx={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                        }}
                    >
                        {actionSlot}
                    </Box>
                )}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        marginBottom: "10px",
                    }}
                >
                    <img
                        style={{ borderRadius: "10px" }}
                        width={160}
                        src={item.img}
                        alt="cardimg"
                    />
                    <Box>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography variant="h6">{item.price} ₽</Typography>
                    </Box>
                </Box>

                {bottomSlot}
            </Paper>
        </Box>
    );
};
