import css from './Footer.module.css';

import { Logo } from 'shared/ui';

export const Footer = () => {
    return (
        <div className={css.footer}>
            <Logo />
            <div>
                <ul className={css.links}>
                    <li className={css.link}>Израбнное</li>
                    <li className={css.link}>Корзина</li>
                    <li className={css.link}>Контакты</li>
                </ul>
            </div>
        </div>
    );
};
