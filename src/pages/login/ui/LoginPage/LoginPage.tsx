import { useNavigate } from "react-router-dom";

import { LoginForm } from "features/login";
import { config } from "shared/api";
import { Stack, Typography } from "@mui/material";

export const LoginPage = () => {
    const navigate = useNavigate();

    const onComplete = () => {
        navigate("/");
    };

    return (
        <>
            <Typography
                variant="h4"
                sx={{ marginTop: "28px", marginBottom: "40px" }}
            >
                Вход в аккаунт
            </Typography>
            <Typography sx={{ marginBottom: "20px" }} variant="subtitle1">
                Используйте
                <Stack direction="row" spacing={1}>
                    <Typography color="success.main">
                        {config.user.login}
                    </Typography>
                    <Typography>/</Typography>
                    <Typography color="success.main">
                        {config.user.password}
                    </Typography>
                </Stack>
                для входа
            </Typography>
            <LoginForm onComplete={onComplete} />
        </>
    );
};
