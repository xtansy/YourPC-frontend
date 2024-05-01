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

import { useNavigate } from "react-router-dom";

export const RecoveryPage = () => {
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
                Восстановление пароля
            </Typography>
            <Card sx={{ maxWidth: "350px" }}>
                <CardContent>
                    <Stack spacing={2}>
                        <Typography>
                            Введите электронную почту для восстановления
                        </Typography>
                        <Box component="form">
                            <Stack spacing={2}>
                                <TextField label="Почта" variant="outlined" />
                                <CardActions sx={{ width: "100%", p: 0 }}>
                                    <Stack width="100%" spacing={1}>
                                        <Button
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
