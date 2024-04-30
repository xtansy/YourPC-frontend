import { useAppDispatch, useAppSelector } from "shared/model";
import { type IProduct } from "entities/product";
import {
    productInFavoritesSelector,
    addItem,
    removeItem,
} from "entities/favorites";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { MouseEventHandler } from "react";

interface AddToFavIconProps {
    item: IProduct;
}

export const AddToFavIcon: React.FC<AddToFavIconProps> = ({ item }) => {
    const dispatch = useAppDispatch();

    const existItem = useAppSelector((state) =>
        productInFavoritesSelector(state, item._id)
    );

    const onClickFav: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        if (!existItem) {
            dispatch(addItem(item));
            return;
        }
        dispatch(removeItem(item._id));
    };

    return (
        <IconButton onClick={onClickFav}>
            {existItem ? (
                <FavoriteIcon color="primary" />
            ) : (
                <FavoriteBorderIcon color="primary" />
            )}
        </IconButton>
    );
};
