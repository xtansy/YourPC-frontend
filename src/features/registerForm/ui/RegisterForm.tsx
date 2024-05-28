import { FC } from "react";
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

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAppDispatch } from "shared/model";
import { registerAsync } from "entities/user";
import { registerFormSchema, type RegisterFormSchema } from "../model";

interface RegisterFormProps {
    onComplete?: () => void;
}

export const RegisterForm: FC<RegisterFormProps> = ({ onComplete }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {
        register,
        setError,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormSchema>({
        resolver: yupResolver(registerFormSchema),
    });

    const onClickLogin = () => {
        navigate("/login");
    };

    const onSubmit = (_data: RegisterFormSchema) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { confirmPassword, ...data } = _data;
        dispatch(registerAsync(data))
            .unwrap()
            .then(() => {
                onComplete?.();
            })
            .catch((error: { errorMessage: string }) => {
                setError("confirmPassword", {
                    message: error.errorMessage,
                });
            });
    };

    return (
        <Card sx={{ maxWidth: "350px", marginBottom: "20px" }}>
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
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Stack spacing={2}>
                            <Stack spacing={1}>
                                <TextField
                                    {...register("login")}
                                    fullWidth
                                    label="Логин"
                                    variant="outlined"
                                    error={Boolean(errors.login)}
                                />
                                <Typography color="error.main">
                                    {errors.login?.message}
                                </Typography>
                            </Stack>
                            <Stack spacing={1}>
                                <TextField
                                    {...register("name")}
                                    fullWidth
                                    label="Имя"
                                    variant="outlined"
                                    error={Boolean(errors.name)}
                                />
                                <Typography color="error.main">
                                    {errors.name?.message}
                                </Typography>
                            </Stack>
                            <Stack spacing={1}>
                                <TextField
                                    {...register("surname")}
                                    fullWidth
                                    label="Фамилия"
                                    variant="outlined"
                                    error={Boolean(errors.surname)}
                                />
                                <Typography color="error.main">
                                    {errors.surname?.message}
                                </Typography>
                            </Stack>
                            <Stack spacing={1}>
                                <TextField
                                    {...register("email")}
                                    fullWidth
                                    label="Почта"
                                    variant="outlined"
                                    error={Boolean(errors.email)}
                                />
                                <Typography color="error.main">
                                    {errors.email?.message}
                                </Typography>
                            </Stack>
                            <Stack spacing={1}>
                                <TextField
                                    {...register("password")}
                                    fullWidth
                                    label="Пароль"
                                    variant="outlined"
                                    error={Boolean(errors.password)}
                                />
                                <Typography color="error.main">
                                    {errors.password?.message}
                                </Typography>
                            </Stack>
                            <Stack spacing={1}>
                                <TextField
                                    {...register("confirmPassword")}
                                    fullWidth
                                    label="Повторите пароль"
                                    variant="outlined"
                                    error={Boolean(errors.confirmPassword)}
                                />
                                <Typography color="error.main">
                                    {errors.confirmPassword?.message}
                                </Typography>
                            </Stack>
                        </Stack>
                        <CardActions sx={{ width: "100%" }}>
                            <Stack spacing={1} width={"100%"}>
                                <Button
                                    type="submit"
                                    size="large"
                                    variant="outlined"
                                >
                                    Зарегистрироваться
                                </Button>
                                <Button onClick={onClickLogin} variant="text">
                                    Войти
                                </Button>
                            </Stack>
                        </CardActions>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
};
