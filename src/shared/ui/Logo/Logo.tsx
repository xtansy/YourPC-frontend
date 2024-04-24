import { LogoSvg } from "..";
import { IconButton, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/");
    };

    return (
        <Box
            onClick={onClick}
            sx={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                filter: "drop-shadow(3px 3px 15px blue)",
            }}
        >
            <IconButton color="primary">
                <LogoSvg />
            </IconButton>
            <Typography
                variant="h4"
                sx={{ cursor: "pointer", fontWeight: "bold" }}
            >
                Your PC
            </Typography>
        </Box>
    );
};
