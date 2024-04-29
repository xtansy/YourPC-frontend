import { Box, Typography } from "@mui/material";

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
                        <LogoutButton />
                    </>
                }
            />
        </Box>
    );
};
