import css from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";

import { LoginForm } from "features/login";
import { config } from "shared/api";

export const LoginPage = () => {
    const navigate = useNavigate();

    const onComplete = () => {
        navigate("/");
    };

    return (
        <div className={css.root}>
            <h2 className={css.title}>Login page</h2>
            <p className={css.test}>
                Use <span>{config.user.login}</span> /{" "}
                <span>{config.user.password}</span> as test user credentials
            </p>
            <LoginForm onComplete={onComplete} />
        </div>
    );
};
