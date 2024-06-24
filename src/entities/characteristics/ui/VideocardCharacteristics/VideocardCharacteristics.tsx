import { FC } from "react";
import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";

import { type IVideocardCharacteristics } from "entities/characteristics/model/types";

interface VideocardCharacteristicsProps extends IVideocardCharacteristics {}

export const VideocardCharacteristics: FC<VideocardCharacteristicsProps> = ({
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
                        <Typography variant="h6">Объем видеопамяти</Typography>
                        <Typography variant="h6">
                            {characteristics.videoMemory}
                        </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h6">
                            Количество универсальных процессоров
                        </Typography>
                        <Typography variant="h6">
                            {characteristics.processorsCount}
                        </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h6">
                            Число текстурных блоков
                        </Typography>
                        <Typography variant="h6">
                            {characteristics.textureBlocks}
                        </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h6">
                            Штатная частота работы видеочипа
                        </Typography>
                        <Typography variant="h6">
                            {characteristics.standardFrequency} ГГц
                        </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography variant="h6">Турбочастота</Typography>
                        <Typography variant="h6">
                            {characteristics.turboFrequency} ГГц
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
};
