import { FC } from "react";
import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";

import { type IProcessorCharacteristics } from "entities/characteristics/model/types";

interface ProcessorCharacteristicsProps extends IProcessorCharacteristics {}

export const ProcessorCharacteristics: FC<ProcessorCharacteristicsProps> = ({
    characteristics,
}) => {
    return (
        <Card sx={{ marginTop: "20px", p: 2 }}>
            <CardContent>
                <Typography variant="h5" sx={{ marginBottom: "15px" }}>
                    Характеристики:
                </Typography>
                <Stack spacing={1} divider={<Divider />}>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h6">Ядер</Typography>
                        <Typography variant="h6">
                            {characteristics.cores}
                        </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h6">Потоков</Typography>
                        <Typography variant="h6">
                            {characteristics.streams}
                        </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h6">Базовая частота</Typography>
                        <Typography variant="h6">
                            {characteristics.baseFrequency} ГГц
                        </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h6">
                            Максимальная частота
                        </Typography>
                        <Typography variant="h6">
                            {characteristics.maxFrequency} ГГц
                        </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h6">
                            Максимальная температура ядра
                        </Typography>
                        <Typography variant="h6">
                            {characteristics.maxCoreTemperature} °C
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
};
