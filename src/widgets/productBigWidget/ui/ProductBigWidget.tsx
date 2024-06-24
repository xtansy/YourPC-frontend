import { FC } from "react";

import { useAppSelector } from "shared/model";

import { type IProduct, EProductType, ProductBig } from "entities/product";
import { isAuthSelector } from "entities/user";
import {
    ProcessorCharacteristics,
    VideocardCharacteristics,
    RamCharacteristics,
    MotherboardCharacteristics,
} from "entities/characteristics";

import { AddRemoveCartSmart } from "features/addRemoveCartSmart";
import { AddToFavIcon } from "features/addToFav";
import { AddRemoveComparisonSmartButton } from "features/addRemoveComparisonSmart";

interface ProductBigWidgetProps {
    item: IProduct;
}

export const ProductBigWidget: FC<ProductBigWidgetProps> = ({ item }) => {
    const isAuth = useAppSelector(isAuthSelector);
    return (
        <>
            <ProductBig
                item={item}
                addToComparisonActionSlot={
                    isAuth ? (
                        <AddRemoveComparisonSmartButton item={item} />
                    ) : undefined
                }
                addToCartActionSlot={
                    isAuth ? <AddRemoveCartSmart item={item} /> : undefined
                }
                addToFavActionSlot={
                    isAuth ? <AddToFavIcon item={item} /> : undefined
                }
            />
            {item.type === EProductType.processor && (
                <ProcessorCharacteristics
                    characteristics={item.characteristics}
                />
            )}

            {item.type === EProductType.videocard && (
                <VideocardCharacteristics
                    characteristics={item.characteristics}
                />
            )}

            {item.type === EProductType.ram && (
                <RamCharacteristics characteristics={item.characteristics} />
            )}

            {item.type === EProductType.motherboard && (
                <MotherboardCharacteristics
                    characteristics={item.characteristics}
                />
            )}
        </>
    );
};
