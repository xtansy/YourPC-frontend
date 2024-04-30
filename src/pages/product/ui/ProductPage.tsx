import { Typography } from "@mui/material";
import { IProduct, ProductBig } from "entities/product";

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
        </>
    );
};
