import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { type CatalogItemData } from "entities/catalog/model";

interface CatalogItemProps extends CatalogItemData {}

export const CatalogItem: FC<CatalogItemProps> = ({ name, imageUrl, to }) => {
    const navigate = useNavigate();

    const onClickCatalog = () => {
        navigate(to);
    };

    return (
        <Box
            onClick={onClickCatalog}
            sx={{
                cursor: "pointer",
                minHeight: "450px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "12px",
                padding: "20px",
                flexBasis: "33%",
                background:
                    "linear-gradient(to right bottom, rgba(0, 59, 117, 0.1) 25%, rgba(20, 23, 26, 0.2) 100%) rgba(20, 23, 26, 0.25)",
                border: "1px solid rgb(29, 33, 38)",
                ":hover": {
                    border: "1px solid rgba(51, 153, 255, 0.25)",
                    boxShadow:
                        "rgba(0, 107, 214, 0.1) 0px 0px 0px 2px, rgba(0, 0, 0, 0.25) 0px 2px 12px 0px inset",
                    backgroundColor: "rgba(0, 59, 117, 0.4)",
                },
                transition:
                    "border 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 150ms, background-color 100ms cubic-bezier(0.4, 0, 0.2, 1) 100ms",
            }}
        >
            <img
                style={{ borderRadius: "12px" }}
                width={300}
                src={imageUrl}
                alt="catalog img"
            />
            <Typography variant="h5">{name}</Typography>
        </Box>
    );
};
