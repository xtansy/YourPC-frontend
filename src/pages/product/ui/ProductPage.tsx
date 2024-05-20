import { useEffect } from "react";
import {
    Avatar,
    Card,
    CardContent,
    Divider,
    Rating,
    Stack,
    Typography,
} from "@mui/material";

import { useParams } from "react-router-dom";

import { useAppDispatch } from "shared/model";
import { useAppSelector } from "shared/model";
import {
    getProductAsync,
    productSelector,
    productIsLoadingSelector,
} from "entities/product";
import { ProductBigWidget } from "widgets/productBigWidget";

export const ProductPage = () => {
    const productId: string = useParams().id!;

    const dispatch = useAppDispatch();

    const product = useAppSelector(productSelector);
    const isLoading = useAppSelector(productIsLoadingSelector);

    useEffect(() => {
        dispatch(getProductAsync({ productId }));
    }, [productId]);

    if (isLoading) return <h1>Загрузка...</h1>;

    if (!product) return <h1>Нет продукта</h1>;

    return (
        <>
            <Typography
                variant="h4"
                sx={{ marginTop: "28px", marginBottom: "40px" }}
            >
                Продукт {product.title}
            </Typography>

            <ProductBigWidget item={product} />

            <Card sx={{ marginTop: "20px", p: 2 }}>
                <CardContent>
                    <Typography variant="h5" sx={{ marginBottom: "15px" }}>
                        Характеристики:
                    </Typography>
                    <Stack spacing={1} divider={<Divider />}>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant="h6">Ядер</Typography>
                            <Typography variant="h6">16</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant="h6">Потоков</Typography>
                            <Typography variant="h6">24</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant="h6">
                                Базовая частота
                            </Typography>
                            <Typography variant="h6">3.2 ГГц</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant="h6">
                                Максимальная частота
                            </Typography>
                            <Typography variant="h6">5.2 ГГц</Typography>
                        </Stack>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography variant="h6">
                                Максимальная температура ядра
                            </Typography>
                            <Typography variant="h6">100 °C</Typography>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>

            <Card sx={{ marginTop: "20px", marginBottom: "20px", p: 2 }}>
                <CardContent>
                    <Typography variant="h5" sx={{ marginBottom: "15px" }}>
                        Отзывы:
                    </Typography>
                    <Stack divider={<Divider />} spacing={2}>
                        <Stack direction="row" spacing={2}>
                            <Avatar>В</Avatar>
                            <Stack>
                                <Typography>Вася Васев</Typography>
                                <Typography variant="subtitle1">
                                    Нормально, но он не выдает 1000фпс в контра
                                    сити((
                                </Typography>
                                <Rating value={3} name="read-only" readOnly />
                            </Stack>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <Avatar>М</Avatar>
                            <Stack>
                                <Typography>Мага Магомедов</Typography>
                                <Typography variant="subtitle1">
                                    Процессор Сила💪 и Ахмат тоже сила всем
                                    саламалейкум 🦅
                                </Typography>
                                <Rating value={5} name="read-only" readOnly />
                            </Stack>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <Avatar>А</Avatar>
                            <Stack>
                                <Typography>Анна Петровна</Typography>
                                <Typography variant="subtitle1">
                                    Подарите бесплатно у меня дети плачут играть
                                    хотят
                                </Typography>
                                <Rating value={2} name="read-only" readOnly />
                            </Stack>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <Avatar>А</Avatar>
                            <Stack>
                                <Typography>Аноним Анонимов</Typography>
                                <Typography variant="subtitle1">
                                    Говно
                                </Typography>
                                <Rating value={1} name="read-only" readOnly />
                            </Stack>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </>
    );
};
