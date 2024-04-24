import React from "react";
import ReactDOM from "react-dom/client";

import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { withProvider } from "./providers";
import { Routing } from "./routing";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const root = document.getElementById("root") as HTMLElement;

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#42a5f5",
        },
    },
});

export const App = withProvider(() => <Routing />);

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
