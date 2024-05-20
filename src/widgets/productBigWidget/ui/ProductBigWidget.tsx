import { FC } from "react";

import { useAppSelector } from "shared/model";

import { type IProduct, ProductBig } from "entities/product";
import { isAuthSelector } from "entities/user";

import { AddRemoveCartSmart } from "features/addRemoveCartSmart";
import { AddToFavIcon } from "features/addToFav";

interface ProductBigWidgetProps {
    item: IProduct;
}

export const ProductBigWidget: FC<ProductBigWidgetProps> = ({ item }) => {
    const isAuth = useAppSelector(isAuthSelector);
    return (
        <>
            <ProductBig
                item={item}
                addToCartActionSlot={
                    isAuth ? <AddRemoveCartSmart item={item} /> : undefined
                }
                addToFavActionSlot={
                    isAuth ? <AddToFavIcon item={item} /> : undefined
                }
            />
        </>
    );
};
