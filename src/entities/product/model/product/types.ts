export enum EProductType {
    processor = "processor",
    ram = "ram",
    motherboard = "motherboard",
    videocard = "videocard",
}

interface IProductBase {
    _id: string;
    img: string;
    title: string;
    price: number;
    rate: number;
    type: EProductType;
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
    product: null | IProduct;
    isLoading: boolean;
    errorMessage: null | string;
}
