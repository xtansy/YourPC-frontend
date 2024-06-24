import { legendClasses } from "@mui/x-charts";

export const BAR_CHART_DEFAULT_PARAMS = {
    margin: { top: 10, right: 10 },
    sx: {
        [`& .${legendClasses.root}`]: {
            display: "none",
        },
    },
    height: 500,
};
