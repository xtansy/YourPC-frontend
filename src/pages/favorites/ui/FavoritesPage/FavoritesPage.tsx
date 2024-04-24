import css from "./FavoritesPage.module.css";

import { useAppSelector } from "shared/model";
import { favoritesItemsSelector } from "entities/favorites";
import { Catalog } from "widgets/catalog";

export const FavoritesPage = () => {
    const items = useAppSelector(favoritesItemsSelector);
    return (
        <div className={css.favorites}>
            <Catalog title="Понравившиеся" items={items} />
        </div>
    );
};
