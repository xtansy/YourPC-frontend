import { Box, Typography, Button } from "@mui/material";

import { Profile } from "entities/user/ui";

import { LogoutButton } from "features/logout";
import { EditUserButton } from "features/editUser";

export const ProfilePage = () => {
    return (
        <Box>
            <Typography variant="h4" sx={{ marginTop: "28px" }}>
                Профиль
            </Typography>
            <Profile
                editLogoutButtonsSlot={
                    <>
                        <EditUserButton />
                        <Button size="large" variant="outlined">
                            Сменить пароль
                        </Button>
                        <LogoutButton />
                    </>
                }
            />
        </Box>
    );
};
