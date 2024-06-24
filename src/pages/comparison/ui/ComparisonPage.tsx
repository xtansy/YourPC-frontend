import { Typography } from "@mui/material";
import { ComparisonProductsList } from "widgets/comparisonProductsList";
import { useAppSelector } from "shared/model";

import {
    PieChartComparison,
    BarChartComparison,
    LineChartComparison,
    comparisonItemsSelector,
} from "entities/comparison/";

export const ComparisonPage = () => {
    const items = useAppSelector(comparisonItemsSelector);

    if (items.length === 0) {
        return (
            <Typography
                variant="h4"
                sx={{ marginTop: "28px", marginBottom: "30px" }}
            >
                Выберите минимум 2 продукта для сравнения
            </Typography>
        );
    }

    if (items.length === 1) {
        return (
            <Typography
                variant="h4"
                sx={{ marginTop: "28px", marginBottom: "30px" }}
            >
                Выберите еще один продукт для сравнения
            </Typography>
        );
    }

    return (
        <>
            <Typography
                variant="h4"
                sx={{ marginTop: "28px", marginBottom: "30px" }}
            >
                Сравнение
            </Typography>

            <ComparisonProductsList />

            <BarChartComparison />

            <LineChartComparison />

            <PieChartComparison />
        </>
    );
};
