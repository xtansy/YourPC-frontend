import { FC, MouseEventHandler } from "react";
import { Button } from "@mui/material";

import { useAppDispatch } from "shared/model";

import { addItem } from "entities/cart";
import { IProduct } from "entities/product";

interface AddToCartButtonProps {
    item: IProduct;
}

export const AddToCartButton: FC<AddToCartButtonProps> = ({ item }) => {
    const dispatch = useAppDispatch();

    const onClickAdd: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();
        dispatch(addItem(item));
    };

    return (
        <Button variant="outlined" size="large" onClick={onClickAdd}>
            Купить
        </Button>
    );
};
