import { FC, ReactNode } from "react";

import {
    Box,
    Typography,
    Card,
    Divider,
    Avatar,
    CardContent,
    CardActions,
    Stack,
} from "@mui/material";
import { type User } from "entities/user/model/types";

interface ProfileProps {
    user: User;
    editLogoutButtonsSlot?: ReactNode;
}

export const Profile: FC<ProfileProps> = ({ user, editLogoutButtonsSlot }) => {
    return (
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
                                    {user.name}
                                </Typography>
                            </Stack>
                            <Stack direction="row" spacing={4}>
                                <Typography width={90} variant="subtitle1">
                                    Фамилия:
                                </Typography>
                                <Typography variant="subtitle1">
                                    {user.surname}
                                </Typography>
                            </Stack>
                            <Stack direction="row" spacing={4}>
                                <Typography width={90} variant="subtitle1">
                                    Почта:
                                </Typography>
                                <Typography variant="subtitle1">
                                    {user.email}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </CardContent>

                {editLogoutButtonsSlot && (
                    <CardActions sx={{ py: "20px" }}>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-around"
                            width="100%"
                        >
                            {editLogoutButtonsSlot}
                        </Stack>
                    </CardActions>
                )}
            </Stack>
        </Card>
    );
};
