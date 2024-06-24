import { type BarChartProps, type BarSeriesType } from "@mui/x-charts";

import { type IProduct } from "entities/product";

type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

const CHARACTERISTIC_KEY_TO_LABEL_MAP: Record<
    keyof IProduct["characteristics"],
    string
> = {
    cores: "Ядер",
    streams: "Потоков",
    baseFrequency: "Базовая частота",
    maxFrequency: "Максимальная частота",
};

const getCharacteristicsByKey = (
    arr: IProduct[],
    key: keyof IProduct["characteristics"]
): MakeOptional<BarSeriesType, "type"> => {
    const result = {
        label: CHARACTERISTIC_KEY_TO_LABEL_MAP[key] ?? key,
        data: [],
    };

    arr.map((item) => {
        const characteristics = item.characteristics;
        result.data.push(characteristics[key]);
    });

    return result;
};

const NEGATIVE_CHARACTERISTICS: string[] = ["heating", "maxCoreTemperature"];

export const generateBarChartCustomParams = (
    items: IProduct[]
): BarChartProps => {
    if (items.length === 0) return { series: [] };

    const obj: BarChartProps = {
        xAxis: [
            {
                scaleType: "band" as const,
                data: items.map((item) => item.title),
            },
        ],
        series: [],
    };

    const firstItem = items[0];

    Object.keys(firstItem.characteristics).map((key) => {
        if (NEGATIVE_CHARACTERISTICS.includes(key)) return;
        obj.series.push(
            getCharacteristicsByKey(
                items,
                key as keyof IProduct["characteristics"]
            )
        );
    });

    return obj;
};
