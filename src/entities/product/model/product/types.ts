import {
    type IProcessorCharacteristics,
    type IVideocardCharacteristics,
    type IMotherboardCharacteristics,
    type IRamCharacteristics,
} from "entities/characteristics/@x/product";

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
}

export interface IProcessor extends IProductBase, IProcessorCharacteristics {
    type: EProductType.processor;
}

export interface IMotherboard
    extends IProductBase,
        IMotherboardCharacteristics {
    type: EProductType.motherboard;
}

export interface IRam extends IProductBase, IRamCharacteristics {
    type: EProductType.ram;
}

export interface IVidecard extends IProductBase, IVideocardCharacteristics {
    type: EProductType.videocard;
}

export type IProduct = IProcessor | IMotherboard | IRam | IVidecard;

export interface ProductModel {
    product: null | IProduct;
    isLoading: boolean;
    errorMessage: null | string;
}
