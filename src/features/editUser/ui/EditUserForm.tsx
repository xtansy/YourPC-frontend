import { yupResolver } from "@hookform/resolvers/yup";
import {
    Alert,
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Snackbar,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { editUserFormSchema, type EditUserFormSchema } from "../model";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "shared/model";
import { editAsync } from "entities/user";
import { useAppSelector } from "shared/model";
import { SyntheticEvent, useState } from "react";

export const EditUserForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState(false);

    const id = useAppSelector((state) => state.user.user?._id);

    const onClickBack = () => {
        navigate(-1);
    };

    const {
        register,
        setError,
        handleSubmit,
        formState: { errors },
    } = useForm<EditUserFormSchema>({
        resolver: yupResolver(editUserFormSchema),
    });

    const onSubmit = (data: EditUserFormSchema) => {
        if (id) {
            const props = { ...data, id };
            dispatch(editAsync(props))
                .unwrap()
                .then(() => {
                    handleOpen();
                    // navigate(-1);
                })
                .catch((error: { errorMessage: string }) => {
                    setError("email", {
                        message: error.errorMessage,
                    });
                });
        }
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
                    Данные успешны изменены!
                </Alert>
            </Snackbar>
            <Card
                sx={{
                    margin: "0 auto",
                    marginTop: "30px",
                    marginBottom: "30px",
                    width: "100%",
                    maxWidth: "900px",
                }}
            >
                <Stack divider={<Divider />}>
                    <Box sx={{ padding: "20px" }}>
                        <Typography variant="subtitle1">
                            Редактирование персональной информации
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Вы можете сохранить изменения
                        </Typography>
                    </Box>

                    <CardContent
                        onSubmit={handleSubmit(onSubmit)}
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Stack spacing={3} alignItems="center">
                            <Avatar sx={{ width: "150px", height: "150px" }} />
                            <Stack spacing={2}>
                                <TextField
                                    {...register("name")}
                                    error={Boolean(errors.name)}
                                    label="Имя"
                                    variant="outlined"
                                />
                                <Typography color="error.main">
                                    {errors.name?.message}
                                </Typography>
                                <TextField
                                    {...register("surname")}
                                    error={Boolean(errors.surname)}
                                    label="Фамилия"
                                    variant="outlined"
                                />
                                <Typography color="error.main">
                                    {errors.surname?.message}
                                </Typography>
                                <TextField
                                    {...register("email")}
                                    error={Boolean(errors.email)}
                                    label="Почта"
                                    variant="outlined"
                                />
                                <Typography color="error.main">
                                    {errors.email?.message}
                                </Typography>
                            </Stack>
                        </Stack>
                        <CardActions
                            sx={{
                                marginTop: "10px",
                                maxWidth: "230px",
                                width: "100%",
                            }}
                        >
                            <Stack width="100%" spacing={2}>
                                <Button
                                    type="submit"
                                    size="large"
                                    variant="outlined"
                                >
                                    Сохранить
                                </Button>
                                <Button
                                    onClick={onClickBack}
                                    size="large"
                                    variant="text"
                                >
                                    Назад
                                </Button>
                            </Stack>
                        </CardActions>
                    </CardContent>
                </Stack>
            </Card>
        </>
    );
};
