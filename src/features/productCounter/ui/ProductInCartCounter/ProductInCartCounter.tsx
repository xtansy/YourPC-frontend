import css from "./ProductInCartCounter.module.css";

import { useAppDispatch } from "shared/model";
import { type CartItem, addItem, minusItem } from "entities/cart";
import { Box, Typography, IconButton } from "@mui/material";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

interface ProductInCartCounterProps {
    product: CartItem;
    withSummary?: boolean;
}

export const ProductInCartCounter: React.FC<ProductInCartCounterProps> = ({
    product,
    withSummary,
}) => {
    const dispatch = useAppDispatch();

    const onClickPlus = () => {
        dispatch(addItem(product));
    };

    const onClickMinus = () => {
        dispatch(minusItem(product._id));
    };

    return (
        <Box sx={{ width: withSummary ? "100%" : "" }}>
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
                <div className={css.bottomPrice}>
                    {product.price * product.count} ₽
                </div>
            )}
        </Box>
    );
};
