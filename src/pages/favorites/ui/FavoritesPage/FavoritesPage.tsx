import css from "./FavoritesPage.module.css";

import { useAppSelector } from "shared/model";
import { favoritesItemsSelector } from "entities/favorites";
import { ProductsListWidget } from "widgets/productsListWidget";

export const FavoritesPage = () => {
    const items = useAppSelector(favoritesItemsSelector);
    return (
        <div className={css.favorites}>
            <ProductsListWidget title="Понравившиеся" items={items} />
        </div>
    );
};
