import { Button } from "@mui/material";

import { useAppDispatch } from "shared/model";

import { logoutAsync } from "entities/user";
import { clearCartData } from "entities/cart";
import { clearFavoritesData } from "entities/favorites";

export const LogoutButton = () => {
    const dispatch = useAppDispatch();

    const onClickLogout = () => {
        dispatch(logoutAsync());
        dispatch(clearCartData());
        dispatch(clearFavoritesData());
    };

    return (
        <Button
            onClick={onClickLogout}
            variant="outlined"
            color="error"
            size="large"
        >
            Выйти
        </Button>
    );
};
