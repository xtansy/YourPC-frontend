import { Box, Card, CardContent, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";

const data = [
    { id: 0, value: 20, label: "Intel Core i9-10940X" },
    { id: 2, value: 30, label: "AMD Ryzen Threadripper 3960X" },
];

export const PieChartComparison = () => {
    return (
        <Card sx={{ marginTop: "30px", marginBottom: "30px" }}>
            <CardContent>
                <Typography variant="h5">Итог:</Typography>
                <Typography variant="h5">
                    Мы рекомендуем к покупке AMD Ryzen Threadripper 3960X
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
