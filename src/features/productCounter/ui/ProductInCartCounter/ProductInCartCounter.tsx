import { useAppDispatch } from "shared/model";
import { type CartItem, addItem, minusItem } from "entities/cart";
import { Box, Typography, IconButton } from "@mui/material";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { MouseEventHandler } from "react";

interface ProductInCartCounterProps {
    product: CartItem;
    withSummary?: boolean;
}

export const ProductInCartCounter: React.FC<ProductInCartCounterProps> = ({
    product,
    withSummary,
}) => {
    const dispatch = useAppDispatch();

    const onClickPlus: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        dispatch(addItem(product));
    };

    const onClickMinus: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        dispatch(minusItem(product._id));
    };

    return (
        <Box
            sx={{
                width: withSummary ? "100%" : "",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <IconButton color="primary" onClick={onClickMinus}>
                    <RemoveCircleOutlineOutlinedIcon
                        color="primary"
                        fontSize="large"
                    />
                </IconButton>
                <Typography variant="h6">{product.count}</Typography>
                <IconButton color="primary" onClick={onClickPlus}>
                    <AddCircleOutlineOutlinedIcon
                        color="primary"
                        fontSize="large"
                    />
                </IconButton>
            </Box>

            {withSummary && (
                <Typography variant="h6">
                    {product.price * product.count} ₽
                </Typography>
            )}
        </Box>
    );
};
