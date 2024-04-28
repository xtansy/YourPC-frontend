import { ReactNode } from "react";
import { Box } from "@mui/material";

import { IProduct } from "entities/product/model/types";
import { Card } from "../Card/Card";

interface CardListProps<T extends IProduct> {
    items: T[];
    renderCardActionsSlot?: (id: T["_id"]) => ReactNode;
    renderCardBottomSlot?: (product: T) => ReactNode;
}

export const CardList = <T extends IProduct>({
    items,
    renderCardActionsSlot,
    renderCardBottomSlot,
}: CardListProps<T>) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                width: "100%",
            }}
        >
            {items.map((item: T) => {
                return (
                    <Card
                        key={item._id}
                        item={item}
                        actionSlot={
                            renderCardActionsSlot &&
                            renderCardActionsSlot(item._id)
                        }
                        bottomSlot={
                            renderCardBottomSlot && renderCardBottomSlot(item)
                        }
                    />
                );
            })}
        </Box>
    );
};
