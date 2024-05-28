import { Typography } from "@mui/material";

import { RegisterForm } from "features/registerForm";

export const RegisterPage = () => {
    return (
        <>
            <Typography
                variant="h4"
                sx={{ marginTop: "28px", marginBottom: "40px" }}
            >
                Регистрация аккаунта
            </Typography>

            <RegisterForm />
        </>
    );
};
