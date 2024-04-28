import { Typography } from "@mui/material";
import { CatalogList } from "entities/catalog";

export const CatalogPage = () => {
    return (
        <>
            <Typography variant="h4" sx={{ marginTop: "28px" }}>
                Каталог
            </Typography>
            <CatalogList rootSx={{ marginTop: "25px", marginBottom: "25px" }} />
        </>
    );
};
