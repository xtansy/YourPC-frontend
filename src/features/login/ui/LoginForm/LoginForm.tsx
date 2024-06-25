import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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

import {
    type LoginFormSchema,
    loginFormSchema,
} from "../../model/loginFormSchema";

import { useAppDispatch } from "shared/model";
import { loginAsync } from "entities/user";

interface LoginFormProps {
    onComplete?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onComplete }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {
        setError,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormSchema>({
        resolver: yupResolver(loginFormSchema),
    });

    const onSubmit = (data: LoginFormSchema) => {
        dispatch(loginAsync(data))
            .unwrap()
            .then(() => {
                onComplete?.();
            })
            .catch((error: { errorMessage: string }) => {
                setError("password", {
                    message: error.errorMessage,
                });
            });
    };

    const onClickRegister = () => {
        navigate("/register");
    };

    const onClickRecovery = () => {
        navigate("/recovery");
    };

    return (
        <Card sx={{ maxWidth: "350px" }}>
            <CardContent>
                <Stack spacing={2}>
                    <Typography>Введите данные для входа</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                        }}
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Stack spacing={1}>
                            <TextField
                                error={Boolean(errors.login)}
                                {...register("login")}
                                label="Логин"
                                variant="outlined"
                            />
                            <Typography color="error.main">
                                {errors.login?.message}
                            </Typography>
                        </Stack>
                        <Stack spacing={1}>
                            <TextField
                                error={Boolean(errors.password)}
                                {...register("password")}
                                label="Пароль"
                                variant="outlined"
                            />
                            <Typography color="error.main">
                                {errors.password?.message}
                            </Typography>
                        </Stack>
                        <CardActions sx={{ width: "100%" }}>
                            <Stack spacing={1} width={"100%"}>
                                <Button
                                    size="large"
                                    variant="outlined"
                                    type="submit"
                                >
                                    Войти
                                </Button>
                                <Button
                                    onClick={onClickRegister}
                                    variant="text"
                                >
                                    Зарегистрироваться
                                </Button>
                                <Typography
                                    onClick={onClickRecovery}
                                    sx={{ cursor: "pointer" }}
                                    variant="body1"
                                    alignSelf="center"
                                    color="text.secondary"
                                >
                                    Забыли пароль?
                                </Typography>
                            </Stack>
                        </CardActions>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};
