import { FC, SyntheticEvent, useState } from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Stack,
    TextField,
    Typography,
    Alert,
    Snackbar,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { recoveryFormSchema, type RecoveryFormSchema } from "../model";
import { recovery } from "../api";

interface RegisterFormProps {
    onComplete?: () => void;
}

export const RecoveryForm: FC<RegisterFormProps> = () => {
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();
    const {
        register,
        setError,
        handleSubmit,
        formState: { errors },
    } = useForm<RecoveryFormSchema>({
        resolver: yupResolver(recoveryFormSchema),
    });

    const onClickLogin = () => {
        navigate("/login");
    };

    const onSubmit = (data: RecoveryFormSchema) => {
        recovery(data)
            .then(() => handleOpen())
            .catch((error) => {
                setError("email", {
                    message: error.response.data.errorMessage,
                });
            });
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (_event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%", color: "white" }}
                >
                    Новый пароль отправлен на почту!
                </Alert>
            </Snackbar>
            <Card sx={{ maxWidth: "350px" }}>
                <CardContent>
                    <Stack spacing={2}>
                        <Typography>
                            Введите электронную почту для восстановления
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                            <Stack spacing={2}>
                                <TextField
                                    {...register("email")}
                                    error={Boolean(errors.email)}
                                    label="Почта"
                                    variant="outlined"
                                />
                                <Typography color="error.main">
                                    {errors.email?.message}
                                </Typography>
                                <CardActions sx={{ width: "100%", p: 0 }}>
                                    <Stack width="100%" spacing={1}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            size="large"
                                            variant="outlined"
                                        >
                                            Восстановить пароль
                                        </Button>
                                        <Button
                                            onClick={onClickLogin}
                                            variant="text"
                                        >
                                            Ко входу
                                        </Button>
                                    </Stack>
                                </CardActions>
                            </Stack>
                        </Box>
                    </Stack>
                </CardContent>
            </Card>
        </>
    );
};
