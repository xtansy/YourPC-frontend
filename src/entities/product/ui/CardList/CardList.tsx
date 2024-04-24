import css from "./CardList.module.css";

import { IProduct } from "entities/product/model/types";
import { Card } from "../Card/Card";

interface CardListProps<T extends IProduct> {
    items: T[];
    renderCardActionsSlot?: (id: T["_id"]) => React.ReactNode;
    renderCardBottomSlot?: (product: T) => React.ReactNode;
}

export const CardList = <T extends IProduct>({
    items,
    renderCardActionsSlot,
    renderCardBottomSlot,
}: CardListProps<T>) => {
    return (
        <div className={css.list}>
            {items.map((headphone: T) => {
                return (
                    <Card
                        key={headphone._id}
                        item={headphone}
                        actionSlot={
                            renderCardActionsSlot &&
                            renderCardActionsSlot(headphone._id)
                        }
                        bottomSlot={
                            renderCardBottomSlot &&
                            renderCardBottomSlot(headphone)
                        }
                    />
                );
            })}
        </div>
    );
};
