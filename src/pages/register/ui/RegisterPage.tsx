import { useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

export const RegisterPage = () => {
    const navigate = useNavigate();

    const onClickLogin = () => {
        navigate("/login");
    };

    return (
        <>
            <Typography
                variant="h4"
                sx={{ marginTop: "28px", marginBottom: "40px" }}
            >
                Регистрация аккаунта
            </Typography>

            <Card sx={{ maxWidth: "350px" }}>
                <CardContent>
                    <Stack spacing={2}>
                        <Typography>Введите данные для регистрации</Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                            }}
                            component="form"
                        >
                            <Stack spacing={2}>
                                <TextField label="Логин" variant="outlined" />
                                <TextField label="Имя" variant="outlined" />
                                <TextField label="Фамилия" variant="outlined" />
                                <TextField label="Почта" variant="outlined" />
                                <TextField label="Пароль" variant="outlined" />
                            </Stack>
                            <CardActions sx={{ width: "100%" }}>
                                <Stack spacing={1} width={"100%"}>
                                    <Button size="large" variant="outlined">
                                        Зарегистрироваться
                                    </Button>
                                    <Button
                                        onClick={onClickLogin}
                                        variant="text"
                                    >
                                        Войти
                                    </Button>
                                </Stack>
                            </CardActions>
                        </Box>
                    </Stack>
                </CardContent>
            </Card>
        </>
    );
};
