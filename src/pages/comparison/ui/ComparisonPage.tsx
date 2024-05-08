import { Card, Typography, CardContent, Stack, Box } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { type IProduct, Product } from "entities/product";
import { legendClasses } from "@mui/x-charts/ChartsLegend";
import { LineChart } from "@mui/x-charts/LineChart";
const MOCK_PROCESSOR: IProduct = {
    _id: "1",
    img: "https://res.cloudinary.com/dwe4hewmt/image/upload/v1713705242/%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D1%80_2_qcbrbm.webp",
    title: "Процессор",
    price: 10000,
    rate: 4,
    type: "wired",
};

const data = [
    { id: 0, value: 10, label: "Процессор 1" },
    { id: 1, value: 15, label: "Процессор 2" },
    { id: 2, value: 30, label: "Процессор 3" },
];

const barChartsParams = {
    xAxis: [
        {
            data: [
                "Процессор 1",
                "Процессор 2",
                "Процессор 3",
                "Процессор 4",
                "Процессор 5",
            ],
            scaleType: "band" as const,
        },
    ],
    series: [
        { data: [2, 5, 3, 4, 1], stack: "1", label: "Ядер" },
        { data: [10, 3, 1, 2, 10], stack: "1", label: "Базовая частота" },
        { data: [10, 3, 1, 2, 10], stack: "1", label: "Максимальная частота" },
    ],
    margin: { top: 10, right: 10 },
    sx: {
        [`& .${legendClasses.root}`]: {
            display: "none",
        },
    },
    height: 300,
};

const frequency = Array(29)
    .fill(null)
    .map((_, index) => index + 1);

const FranceGDPperCapita = [
    28129, 28294.264, 28619.805, 28336.16, 28907.977, 29418.863, 29736.645,
    30341.807, 31323.078, 32284.611, 33409.68, 33920.098, 34152.773, 34292.03,
    35093.824, 35495.465, 36166.16, 36845.684, 36761.793, 35534.926, 36086.727,
    36691, 36571, 36632, 36527, 36827, 37124, 37895, 38515.918,
];

const UKGDPperCapita = [
    26189, 25792.014, 25790.186, 26349.342, 27277.543, 27861.215, 28472.248,
    29259.764, 30077.385, 30932.537, 31946.037, 32660.441, 33271.3, 34232.426,
    34865.78, 35623.625, 36214.07, 36816.676, 36264.79, 34402.36, 34754.473,
    34971, 35185, 35618, 36436, 36941, 37334, 37782.83, 38058.086,
];

const GermanyGDPperCapita = [
    25391, 26769.96, 27385.055, 27250.701, 28140.057, 28868.945, 29349.982,
    30186.945, 31129.584, 32087.604, 33367.285, 34260.29, 34590.93, 34716.44,
    35528.715, 36205.574, 38014.137, 39752.207, 40715.434, 38962.938, 41109.582,
    43189, 43320, 43413, 43922, 44293, 44689, 45619.785, 46177.617,
];

const lineChartsParams = {
    series: [
        {
            label: "Температура Процессора 1",
            data: FranceGDPperCapita,
            showMark: false,
        },
        {
            label: "Температура Процессора 2",
            data: GermanyGDPperCapita,
            showMark: false,
        },
        {
            label: "Температура Процессора 3",
            data: UKGDPperCapita,
            showMark: false,
        },
    ],
    height: 600,
};

export const ComparisonPage = () => {
    return (
        <>
            <Typography
                variant="h4"
                sx={{ marginTop: "28px", marginBottom: "30px" }}
            >
                Сравнение
            </Typography>
            <Card>
                <CardContent>
                    <Typography sx={{ marginBottom: "10px" }} variant="h5">
                        Процессор vs Процессор
                    </Typography>
                    <Stack
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                    >
                        <Product item={MOCK_PROCESSOR} />
                        <Typography variant="h3">VS</Typography>
                        <Product item={MOCK_PROCESSOR} />
                    </Stack>
                </CardContent>
            </Card>
            <Card sx={{ marginTop: "30px" }}>
                <CardContent>
                    <Typography sx={{ marginBottom: "20px" }} variant="h5">
                        Характеристики
                    </Typography>
                    <BarChart
                        {...barChartsParams}
                        axisHighlight={{ x: "band", y: "none" }}
                        height={500}
                    />
                </CardContent>
            </Card>

            <Card sx={{ marginTop: "30px" }}>
                <CardContent>
                    <Typography variant="h5">Нагревание</Typography>
                    <LineChart
                        {...lineChartsParams}
                        xAxis={[
                            {
                                data: frequency,
                                scaleType: "linear",
                            },
                        ]}
                        series={lineChartsParams.series}
                    />
                </CardContent>
            </Card>
            <Card sx={{ marginTop: "30px", marginBottom: "30px" }}>
                <CardContent>
                    <Typography variant="h5">Итоги</Typography>
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
        </>
    );
};
