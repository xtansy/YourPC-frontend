import { Box, Typography } from "@mui/material";

import { useAppSelector } from "shared/model";

import { userSelector } from "entities/user";
import { Profile } from "entities/user/ui";

import { LogoutButton } from "features/logout";
import { EditUserButton } from "features/editUser";

export const ProfilePage = () => {
    const user = useAppSelector(userSelector);

    if (!user) return <h1>Нет пользователя</h1>;

    return (
        <Box>
            <Typography variant="h4" sx={{ marginTop: "28px" }}>
                Профиль
            </Typography>
            <Profile
                user={user}
                editLogoutButtonsSlot={
                    <>
                        <EditUserButton />
                        <LogoutButton />
                    </>
                }
            />
        </Box>
    );
};
