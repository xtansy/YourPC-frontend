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
import { AddFeedbackForm } from "features/addFeedback";
import { isAuthSelector } from "entities/user";

export const ProductPage = () => {
    const productId: string = useParams().id!;

    const dispatch = useAppDispatch();

    const product = useAppSelector(productSelector);
    const isLoading = useAppSelector(productIsLoadingSelector);
    const isAuth = useAppSelector(isAuthSelector);

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

            <Card sx={{ marginTop: "20px", marginBottom: "20px", p: 2 }}>
                <CardContent>
                    <Typography variant="h5" sx={{ marginBottom: "15px" }}>
                        Отзывы:
                    </Typography>
                    <Stack divider={<Divider />} spacing={2}>
                        {isAuth && <AddFeedbackForm />}
                        {product.feedback.map((item) => {
                            return (
                                <Stack
                                    key={item._id}
                                    direction="row"
                                    spacing={2}
                                >
                                    <Avatar>{item.user.name[0]}</Avatar>
                                    <Stack>
                                        <Typography>
                                            {item.user.name} {item.user.surname}
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            {item.text}
                                        </Typography>
                                        <Rating
                                            value={item.rate}
                                            name="read-only"
                                            readOnly
                                        />
                                    </Stack>
                                </Stack>
                            );
                        })}
                    </Stack>
                </CardContent>
            </Card>
        </>
    );
};
