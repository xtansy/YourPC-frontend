type ProductType = "wired" | "wireless";

export interface IProduct {
    _id: string;
    img: string;
    title: string;
    price: number;
    rate: number;
    type: ProductType;
}

export interface ProductModel {
    products: IProduct[];
    isLoading: boolean;
    errorMessage: null | string;
}
