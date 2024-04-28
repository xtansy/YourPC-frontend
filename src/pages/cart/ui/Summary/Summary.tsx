import { FC } from "react";

import { Box, Typography, Button, Paper } from "@mui/material";

interface SummaryProps {
    totalPrice: number;
}

export const Summary: FC<SummaryProps> = ({ totalPrice }) => {
    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "360px",
                maxHeight: "120px",
                border: "1px solid rgba(51, 153, 255, 0.25)",
                borderRadius: "5px",
            }}
        >
            <Paper
                sx={{
                    borderRadius: "5px",
                    width: "100%",
                    height: "100%",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "7px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="h6">Итого</Typography>
                    <Typography variant="h5"> {totalPrice} ₽</Typography>
                </Box>
                <Button size="large">Перейти к оформлению</Button>
            </Paper>
        </Box>
    );
};
