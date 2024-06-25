import { Box, Card, CardContent, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import { calculateValue } from "entities/comparison/lib";
import { useAppSelector } from "shared/model";
import { comparisonItemsSelector } from "entities/comparison/model/selectors";

export const PieChartComparison = () => {
    const items = useAppSelector(comparisonItemsSelector);

    const data = items.map((item) => {
        const value = ~~calculateValue(item);
        return {
            id: item._id,
            label: `Показатель эффективности ${
                item.title.length > 20
                    ? item.title.substring(0, 17) + "..."
                    : item.title
            }`,
            value,
        };
    });

    const winnerId = data.reduce(
        (max, obj) => (obj.value > max.value ? obj : max),
        data[0]
    ).id;

    const winner = items.find((item) => item._id === winnerId);

    return (
        <Card sx={{ marginTop: "30px", marginBottom: "30px" }}>
            <CardContent>
                <Typography variant="h5">Итог:</Typography>
                <Typography variant="h5">
                    Мы рекомендуем к покупке {winner?.title}
                </Typography>
                <Box>
                    <PieChart
                        series={[
                            {
                                data,
                                highlightScope: {
                                    faded: "global",
                                    highlighted: "item",
                                },
                                faded: {
                                    innerRadius: 30,
                                    additionalRadius: -30,
                                    color: "gray",
                                },
                            },
                        ]}
                        height={500}
                    />
                </Box>
            </CardContent>
        </Card>
    );
};
