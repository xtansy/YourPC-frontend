import { useLocation } from "react-router-dom";

import { IProduct, Product } from "entities/product";
import { Typography } from "@mui/material";
import { BottomSlot } from "widgets/productsListWidget";
import { useAppSelector } from "shared/model";
import { isAuthSelector } from "entities/user";
import { AddToFavIcon } from "features/addToFav";

type ProductsPathname =
    | "/videocards"
    | "/motherboards"
    | "/rams"
    | "/processors";

const getTitle = (pathname: ProductsPathname) => {
    const obj = {
        ["/videocards"]: "Видеокарты",
        ["/motherboards"]: "Материнские платы",
        ["/rams"]: "Оперативная память",
        ["/processors"]: "Процессоры",
    };

    return obj[pathname];
};

const MOCK_PROCESSOR: IProduct = {
    _id: "1",
    img: "https://res.cloudinary.com/dwe4hewmt/image/upload/v1713705242/%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D1%80_2_qcbrbm.webp",
    title: "Процессор",
    price: 10000,
    rate: 4,
    type: "wired",
};

const MOCK_VIDEOCARD: IProduct = {
    _id: "2",
    img: "https://res.cloudinary.com/dwe4hewmt/image/upload/v1713705234/%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE%D0%BA%D0%B0%D1%80%D1%82%D0%B0_1_fsjoex.png",
    title: "Видеокарта",
    price: 10000,
    rate: 4,
    type: "wired",
};

const MOCK_RAM: IProduct = {
    _id: "3",
    img: "https://res.cloudinary.com/dwe4hewmt/image/upload/v1713705219/catalog_3_qkklmz.jpg",
    title: "Память",
    price: 10000,
    rate: 4,
    type: "wired",
};

const MOCK_MOTHERBOARD: IProduct = {
    _id: "4",
    img: "https://res.cloudinary.com/dwe4hewmt/image/upload/v1713705219/catalog_2_uz5xtm.jpg",
    title: "Мат плата",
    price: 10000,
    rate: 4,
    type: "wired",
};

export const ProductsPage = () => {
    const isAuth = useAppSelector(isAuthSelector);
    const pathname = useLocation().pathname as ProductsPathname;

    const renderProduct = (pathname: ProductsPathname) => {
        const obj = {
            ["/videocards"]: (
                <Product
                    item={MOCK_VIDEOCARD}
                    bottomSlot={<BottomSlot currentProduct={MOCK_VIDEOCARD} />}
                    headerSlot={
                        isAuth ? (
                            <AddToFavIcon item={MOCK_VIDEOCARD} />
                        ) : undefined
                    }
                />
            ),
            ["/motherboards"]: (
                <Product
                    item={MOCK_MOTHERBOARD}
                    bottomSlot={
                        <BottomSlot currentProduct={MOCK_MOTHERBOARD} />
                    }
                    headerSlot={
                        isAuth ? (
                            <AddToFavIcon item={MOCK_MOTHERBOARD} />
                        ) : undefined
                    }
                />
            ),
            ["/rams"]: (
                <Product
                    item={MOCK_RAM}
                    bottomSlot={<BottomSlot currentProduct={MOCK_RAM} />}
                    headerSlot={
                        isAuth ? <AddToFavIcon item={MOCK_RAM} /> : undefined
                    }
                />
            ),
            ["/processors"]: (
                <Product
                    item={MOCK_PROCESSOR}
                    bottomSlot={<BottomSlot currentProduct={MOCK_PROCESSOR} />}
                    headerSlot={
                        isAuth ? (
                            <AddToFavIcon item={MOCK_PROCESSOR} />
                        ) : undefined
                    }
                />
            ),
        };

        return obj[pathname];
    };

    return (
        <>
            <Typography
                variant="h4"
                sx={{ marginTop: "28px", marginBottom: "40px" }}
            >
                {getTitle(pathname)}
            </Typography>
            {renderProduct(pathname)}
        </>
    );
};
