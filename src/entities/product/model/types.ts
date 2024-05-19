type ProductType = "wired" | "wireless";

interface IProductBase {
    _id: string;
    img: string;
    title: string;
    price: number;
    rate: number;
    type: ProductType;
}

interface IProcessor extends IProductBase {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    characteristics: any;
}

interface IMotherboard extends IProductBase {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    characteristics: any;
}

export type IProduct = IProcessor | IMotherboard;

export interface ProductModel {
    products: IProduct[];
    isLoading: boolean;
    errorMessage: null | string;
}
