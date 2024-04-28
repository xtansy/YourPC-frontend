import { FC, type ReactNode } from "react";

import { AppBar, Box, Button, Toolbar } from "@mui/material/";
import { useNavigate } from "react-router-dom";

import { Logo } from "shared/ui";

interface HeaderProps {
    rightSlot: ReactNode;
}

export const Header: FC<HeaderProps> = ({ rightSlot }) => {
    const navigate = useNavigate();

    const onClickCatalog = () => {
        navigate("/catalog");
    };

    return (
        <AppBar
            position="static"
            sx={{
                borderBottomLeftRadius: "5px",
                borderBottomRightRadius: "5px",
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Box
                    sx={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                    <Logo />
                    <Button
                        onClick={onClickCatalog}
                        sx={{ color: "white" }}
                        size="large"
                    >
                        Каталог
                    </Button>
                </Box>

                {rightSlot}
            </Toolbar>
        </AppBar>
    );
};
