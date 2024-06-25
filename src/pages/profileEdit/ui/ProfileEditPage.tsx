import { Box, Typography } from "@mui/material";
import { EditUserForm } from "features/editUser";

export const ProfileEditPage = () => {
    return (
        <Box>
            <Typography variant="h4" sx={{ marginTop: "28px" }}>
                Профиль
            </Typography>
            <EditUserForm />
        </Box>
    );
};
