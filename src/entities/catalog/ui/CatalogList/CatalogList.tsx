import { Box, SxProps } from "@mui/material";
import { CATALOGS_DATA } from "entities/catalog/model";
import { CatalogItem } from "../CatalogItem";
import { FC } from "react";

interface CatalogListProps {
    rootSx: SxProps;
}

export const CatalogList: FC<CatalogListProps> = ({ rootSx }) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexWrap: "wrap",
                gap: "30px",
                ...rootSx,
            }}
        >
            {CATALOGS_DATA.map((catalogData) => (
                <CatalogItem
                    name={catalogData.name}
                    to={catalogData.to}
                    imageUrl={catalogData.imageUrl}
                />
            ))}
        </Box>
    );
};
