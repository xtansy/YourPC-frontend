import { Link } from "react-router-dom";

import { useAppDispatch } from "shared/model";
import { logoutAsync } from "entities/user";
import { clearCartData } from "entities/cart";

export const LogoutButton = () => {
    const dispatch = useAppDispatch();

    const onClickLogout = () => {
        dispatch(logoutAsync());
        dispatch(clearCartData());
    };

    return (
        <Link onClick={onClickLogout} to="/">
            logout
        </Link>
    );
};
