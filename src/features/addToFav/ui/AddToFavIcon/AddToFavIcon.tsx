import { useAppDispatch, useAppSelector } from "shared/model";
import { Icon } from "shared/ui";
import { type IProduct } from "entities/product";
import {
    productInFavoritesSelector,
    addItem,
    removeItem,
} from "entities/favorites";

interface AddToFavIconProps {
    item: IProduct;
}

export const AddToFavIcon: React.FC<AddToFavIconProps> = ({ item }) => {
    const dispatch = useAppDispatch();

    const existItem = useAppSelector((state) =>
        productInFavoritesSelector(state, item._id)
    );

    const onClickFav = () => {
        if (!existItem) {
            dispatch(addItem(item));
            return;
        }
        dispatch(removeItem(item._id));
    };

    return (
        <Icon onClick={onClickFav} type={existItem ? "fill-like" : "like"} />
    );
};
