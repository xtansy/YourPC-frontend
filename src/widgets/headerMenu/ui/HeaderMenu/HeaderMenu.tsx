import css from './HeaderMenu.module.css';

import { Link } from 'react-router-dom';

import { useAppSelector } from 'shared/model';
import { isAuthSelector, userSelector } from 'entities/user';
import { Icon } from 'shared/ui';

export const HeaderMenu = () => {
    const isAuth = useAppSelector(isAuthSelector);
    const user = useAppSelector(userSelector);

    if (!isAuth) {
        return (
            <div className={css.card}>
                <Link to="/login">login</Link>
            </div>
        );
    }

    return (
        <div className={css.headerMenuBlock}>
            <h2>Привет, {user?.login}</h2>
            <Link className={css.link} to="/favorites">
                <p>Понравившиеся</p>
                <Icon type="like" />
            </Link>
            <Link className={css.link} to="/cart">
                Корзина
                <Icon type="cart" />
            </Link>
        </div>
    );
};
