import { FC } from "react";
import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";

import { type IRamCharacteristics } from "entities/characteristics/model/types";

interface RamCharacteristicsProps extends IRamCharacteristics {}

export const RamCharacteristics: FC<RamCharacteristicsProps> = ({
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
                        <Typography variant="h6">Объем памяти</Typography>
                        <Typography variant="h6">
                            {characteristics.memoryCount} ГБ
                        </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h6">Тактовая частота</Typography>
                        <Typography variant="h6">
                            {characteristics.clockFrequency} МГЦ
                        </Typography>
                    </Stack>

                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h6">Тип памяти</Typography>
                        <Typography variant="h6">
                            {characteristics.memoryType}
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
};
