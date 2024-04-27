import { Logo } from "shared/ui";

import { AppBar, Toolbar, Box, IconButton, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
    return (
        <AppBar
            position="static"
            sx={{
                top: "auto",
                bottom: 0,
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
            }}
        >
            <Toolbar>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <Logo />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "3px",
                        }}
                    >
                        <IconButton>
                            <WhatsAppIcon />
                        </IconButton>
                        <IconButton>
                            <InstagramIcon />
                        </IconButton>
                        <Link href="https://github.com/Beemov/YourPC">
                            <IconButton>
                                <GitHubIcon />
                            </IconButton>
                        </Link>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
