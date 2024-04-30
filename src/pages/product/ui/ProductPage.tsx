import { IProduct, ProductBig } from "entities/product";
import {
    Avatar,
    Card,
    CardContent,
    Divider,
    Rating,
    Stack,
    Typography,
} from "@mui/material";

const MOCK_PROCESSOR: IProduct = {
    _id: "1",
    img: "https://res.cloudinary.com/dwe4hewmt/image/upload/v1713705242/%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D1%80_2_qcbrbm.webp",
    title: "Процессор",
    price: 10000,
    rate: 4,
    type: "wired",
};

export const ProductPage = () => {
    return (
        <>
            <Typography
                variant="h4"
                sx={{ marginTop: "28px", marginBottom: "40px" }}
            >
                Продукт {MOCK_PROCESSOR.title}
            </Typography>

            <ProductBig item={MOCK_PROCESSOR} />

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
