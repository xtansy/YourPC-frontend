import { type IProduct } from "../product/types";

export interface ProductsModel {
    products: IProduct[];
    isLoading: boolean;
    errorMessage: null | string;
}
