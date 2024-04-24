import { useNavigate } from "react-router-dom";

import { Box, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

export const HeaderMenuNoAuth = () => {
    const navigate = useNavigate();

    const onClickLogin = () => {
        navigate("/login");
    };

    return (
        <Box>
            <Button onClick={onClickLogin} sx={{ color: "white" }} size="large">
                <LoginIcon sx={{ marginRight: "5px" }} />
                Войти
            </Button>
        </Box>
    );
};
