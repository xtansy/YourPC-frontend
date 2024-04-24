import { useAppSelector } from "shared/model";
import { isAuthSelector } from "entities/user";

import { HeaderMenuAuth } from "../HeaderMenuAuth";
import { HeaderMenuNoAuth } from "../HeaderMenuNoAuth";

export const HeaderMenu = () => {
    const isAuth = useAppSelector(isAuthSelector);

    return isAuth ? <HeaderMenuAuth /> : <HeaderMenuNoAuth />;
};
