import { Card, CardContent, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";

import { useAppSelector } from "shared/model";

import { comparisonItemsSelector } from "entities/comparison";
import {
    generateBarChartCustomParams,
    BAR_CHART_DEFAULT_PARAMS,
} from "entities/comparison/lib";

export const BarChartComparison = () => {
    const items = useAppSelector(comparisonItemsSelector);
    return (
        <Card sx={{ marginTop: "30px" }}>
            <CardContent>
                <Typography sx={{ marginBottom: "20px" }} variant="h5">
                    Характеристики
                </Typography>
                <BarChart
                    {...BAR_CHART_DEFAULT_PARAMS}
                    {...generateBarChartCustomParams(items)}
                    axisHighlight={{ x: "band", y: "none" }}
                />
            </CardContent>
        </Card>
    );
};
