import { Card, CardContent, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import { useAppSelector } from "shared/model";
import { comparisonItemsSelector } from "entities/comparison/model/selectors";
import { EProductType, IProcessor, IVidecard } from "entities/product";

// const generateBackendData = () => {
//     let GENERATED_BACKEND_DATA = Array(100)
//         .fill(null)
//         .map((_, index) => Math.round((index + 1) * 0.86))
//         .map((item, index) => ({ usage: index + 1, temperature: item }));

//     GENERATED_BACKEND_DATA = GENERATED_BACKEND_DATA.map((item, index) => {
//         const prevTemp = GENERATED_BACKEND_DATA[index - 1]?.temperature;
//         return {
//             ...item,
//             temperature:
//                 Math.random() < 0.5 && prevTemp ? prevTemp : item.temperature,
//         };
//     });

//     return GENERATED_BACKEND_DATA;
// };

export const LineChartComparison = () => {
    const _items = useAppSelector(comparisonItemsSelector);

    const firstItemType = _items[0].type;
    if (firstItemType !== EProductType.processor) {
        return null;
    }

    const items = _items as IProcessor[] | IVidecard[];

    const minHeatingCount = Math.min(
        ...items.map((item) => item.characteristics.heating.length)
    );

    const xAxisData = Array(minHeatingCount)
        .fill(null)
        .map((_, index) => index + 1);

    const lineChartsParams = {
        series: items.map((item) => {
            return {
                label: item.title,
                showMark: false,
                data: item.characteristics.heating.map(
                    (heat) => heat.temperature
                ),
            };
        }),
        height: 600,
    };

    return (
        <Card sx={{ marginTop: "30px" }}>
            <CardContent>
                <Typography variant="h5">Нагревание</Typography>
                <LineChart
                    {...lineChartsParams}
                    xAxis={[
                        {
                            data: xAxisData,
                            scaleType: "linear",
                        },
                    ]}
                    series={lineChartsParams.series}
                />
            </CardContent>
        </Card>
    );
};
