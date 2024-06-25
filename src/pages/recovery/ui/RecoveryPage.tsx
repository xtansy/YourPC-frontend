import { Typography } from "@mui/material";

import { RecoveryForm } from "features/recovery";

export const RecoveryPage = () => {
    return (
        <>
            <Typography
                variant="h4"
                sx={{ marginTop: "28px", marginBottom: "40px" }}
            >
                Восстановление пароля
            </Typography>
            <RecoveryForm />
            {/* <Card sx={{ maxWidth: "350px" }}>
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
            </Card> */}
        </>
    );
};
