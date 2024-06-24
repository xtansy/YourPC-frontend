import { FC } from "react";
import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";

import { type IMotherboardCharacteristics } from "entities/characteristics/model/types";

interface MotherboardCharacteristicsProps extends IMotherboardCharacteristics {}

export const MotherboardCharacteristics: FC<
    MotherboardCharacteristicsProps
> = ({ characteristics }) => {
    return (
        <Card sx={{ marginTop: "20px", p: 2 }}>
            <CardContent>
                <Typography variant="h5" sx={{ marginBottom: "15px" }}>
                    Характеристики:
                </Typography>
                <Stack spacing={1} divider={<Divider />}>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h6">
                            Максимальный объем памяти
                        </Typography>
                        <Typography variant="h6">
                            {characteristics.maxMemoryCapacity} ГБ
                        </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h6">
                            Количество слотов памяти
                        </Typography>
                        <Typography variant="h6">
                            {characteristics.memorySlots} ШТ
                        </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h6">
                            Минимальная частота памяти
                        </Typography>
                        <Typography variant="h6">
                            {characteristics.minMemoryFrequency} ГГц
                        </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h6">
                            Максимальная частота памяти
                        </Typography>
                        <Typography variant="h6">
                            {characteristics.maxMemoryCapacity} ГГц
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
};
