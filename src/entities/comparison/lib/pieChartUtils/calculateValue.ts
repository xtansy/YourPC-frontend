import { EProductType } from "entities/product";
import {
    type IProduct,
    type IProcessor,
    type IVidecard,
    type IMotherboard,
    type IRam,
} from "entities/product/@x/comparison";

const weights = {
    // processors
    cores: 1.0,
    streams: 0.8,
    baseFrequency: 1.5,
    maxFrequency: 1.2,
    maxCoreTemperature: 0.5,

    // videcards
    videoMemory: 1,
    processorsCount: 0.005,
    textureBlocks: 0.02,
    standardFrequency: 1.5,
    turboFrequency: 1,

    // motherboards
    memorySlots: 1,
    minMemoryFrequency: 1.5,
    maxMemoryFrequency: 1.2,
    maxMemoryCapacity: 1.2,

    // rams
    memoryCount: 2,
    clockFrequency: 1.5,
};

const calculateProcessorValue = (
    characteristics: IProcessor["characteristics"]
): number => {
    return (
        characteristics.cores * weights.cores +
        characteristics.streams * weights.streams +
        characteristics.baseFrequency * weights.baseFrequency +
        characteristics.maxFrequency * weights.maxFrequency +
        characteristics.maxCoreTemperature * weights.maxCoreTemperature
    );
};

const calculateVideocardValue = (
    characteristics: IVidecard["characteristics"]
): number => {
    return (
        characteristics.videoMemory * weights.videoMemory +
        characteristics.processorsCount * weights.processorsCount +
        characteristics.textureBlocks * weights.textureBlocks +
        characteristics.standardFrequency * weights.standardFrequency +
        characteristics.turboFrequency * weights.turboFrequency
    );
};

const calculateMotherboardValue = (
    characteristics: IMotherboard["characteristics"]
): number => {
    return (
        characteristics.memorySlots * weights.memorySlots +
        characteristics.minMemoryFrequency * weights.minMemoryFrequency +
        characteristics.maxMemoryFrequency * weights.maxMemoryFrequency +
        characteristics.maxMemoryCapacity * weights.maxMemoryCapacity
    );
};

const calculateRamValue = (
    characteristics: IRam["characteristics"]
): number => {
    return (
        characteristics.memoryCount * weights.memoryCount +
        characteristics.clockFrequency * weights.clockFrequency
    );
};

export const calculateValue = (product: IProduct) => {
    switch (product.type) {
        case EProductType.processor:
            return calculateProcessorValue(product.characteristics);
        case EProductType.videocard:
            return calculateVideocardValue(product.characteristics);
        case EProductType.motherboard:
            return calculateMotherboardValue(product.characteristics);
        case EProductType.ram:
            return calculateRamValue(product.characteristics);
    }
};
