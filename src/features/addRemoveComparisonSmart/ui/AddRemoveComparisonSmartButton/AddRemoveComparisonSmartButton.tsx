import { FC, MouseEventHandler } from "react";

import { useAppDispatch, useAppSelector } from "shared/model";
import { type IProduct } from "entities/product";

import { Button } from "@mui/material";
import {
    addItem,
    removeItem,
    productInComparisonSelector,
    isCanAddProductToComparisonSelector,
} from "entities/comparison";

interface AddToFavIconProps {
    item: IProduct;
}

export const AddRemoveComparisonSmartButton: FC<AddToFavIconProps> = ({
    item,
}) => {
    const dispatch = useAppDispatch();

    const existItem = useAppSelector((state) =>
        productInComparisonSelector(state, item._id)
    );

    const isCanAddProductToComparison = useAppSelector((state) =>
        isCanAddProductToComparisonSelector(state, item.type)
    );

    const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        if (!existItem) {
            dispatch(addItem(item));
            return;
        }
        dispatch(removeItem(item._id));
    };

    if (!isCanAddProductToComparison) return null;

    return (
        <Button
            color={!existItem ? "primary" : "error"}
            size="small"
            onClick={onClick}
        >
            {!existItem ? "Сравнить" : "Удалить из сравнения"}
        </Button>
    );
};
