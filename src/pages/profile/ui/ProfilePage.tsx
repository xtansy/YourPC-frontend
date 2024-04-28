import {
    Box,
    Typography,
    Card,
    Divider,
    Avatar,
    CardContent,
    CardActions,
    Stack,
    Button,
} from "@mui/material";

export const ProfilePage = () => {
    return (
        <Box>
            <Typography variant="h4" sx={{ marginTop: "28px" }}>
                Профиль
            </Typography>
            <Card
                sx={{
                    margin: "0 auto",
                    marginTop: "30px",
                    width: "100%",
                    maxWidth: "900px",
                }}
            >
                <Stack divider={<Divider />}>
                    <Box sx={{ padding: "20px" }}>
                        <Typography variant="subtitle1">
                            Персональная информация
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Вы можете редактировать свой профиль
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
                                <Stack direction="row" spacing={4}>
                                    <Typography width={90} variant="subtitle1">
                                        Имя:
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Андрей
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={4}>
                                    <Typography width={90} variant="subtitle1">
                                        Фамилия:
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Скидин
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={4}>
                                    <Typography width={90} variant="subtitle1">
                                        Почта:
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        andrew@mail.ru
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </CardContent>

                    <CardActions sx={{ py: "20px" }}>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-around"
                            width="100%"
                        >
                            <Button
                                variant="outlined"
                                color="info"
                                size="large"
                            >
                                Редактировать
                            </Button>
                            <Button
                                variant="outlined"
                                color="error"
                                size="large"
                            >
                                Выйти
                            </Button>
                        </Stack>
                    </CardActions>
                </Stack>
            </Card>
        </Box>
    );
};
