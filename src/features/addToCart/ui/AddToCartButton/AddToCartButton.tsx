import { useAppDispatch } from "shared/model";
import { addItem } from "entities/cart";
import { IProduct } from "entities/product";
import { Button } from "@mui/material";
import { FC } from "react";

interface AddToCartButtonProps {
    item: IProduct;
}

export const AddToCartButton: FC<AddToCartButtonProps> = ({ item }) => {
    const dispatch = useAppDispatch();

    const onClickAdd = () => {
        dispatch(addItem(item));
    };

    return <Button onClick={onClickAdd}>Купить</Button>;
};
