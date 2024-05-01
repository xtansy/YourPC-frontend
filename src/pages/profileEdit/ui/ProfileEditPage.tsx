import {
    Box,
    Typography,
    Divider,
    Card,
    CardContent,
    Avatar,
    Stack,
    TextField,
    CardActions,
    Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

export const ProfileEditPage = () => {
    const navigate = useNavigate();

    const onClickBack = () => {
        navigate(-1);
    };

    return (
        <Box>
            <Typography variant="h4" sx={{ marginTop: "28px" }}>
                Профиль
            </Typography>
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
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Stack spacing={3} alignItems="center">
                            <Avatar sx={{ width: "150px", height: "150px" }} />
                            <Stack spacing={2}>
                                <TextField label="Имя" variant="outlined" />
                                <TextField label="Фамилия" variant="outlined" />
                                <TextField label="Почта" variant="outlined" />
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
                                <Button size="large" variant="outlined">
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
        </Box>
    );
};
