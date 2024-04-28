import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { IconButton } from "@mui/material";

import { useAppDispatch } from "shared/model";

import { type CartItem, removeItem } from "entities/cart";

interface RemoveFromCartIconProps {
    id: CartItem["_id"];
}

export const RemoveFromCartIcon: React.FC<RemoveFromCartIconProps> = ({
    id,
}) => {
    const dispatch = useAppDispatch();

    const onClickRemove = () => {
        dispatch(removeItem(id));
    };

    return (
        <IconButton color="error" onClick={onClickRemove}>
            <DeleteOutlineIcon color="error" />
        </IconButton>
    );
};
