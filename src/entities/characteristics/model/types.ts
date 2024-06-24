interface HeatingIndicator {
    usage: number;
    temperature: number;
}

export interface IProcessorCharacteristics {
    characteristics: {
        cores: number;
        streams: number;
        baseFrequency: number;
        maxFrequency: number;
        maxCoreTemperature: number;
        heating: HeatingIndicator[];
    };
}

export interface IVideocardCharacteristics {
    characteristics: {
        videoMemory: number;
        processorsCount: number;
        textureBlocks: number;
        standardFrequency: number;
        turboFrequency: number;
        heating: HeatingIndicator[];
    };
}

export interface IRamCharacteristics {
    characteristics: {
        memoryCount: number;
        clockFrequency: number;
        memoryType: string;
    };
}

export interface IMotherboardCharacteristics {
    characteristics: {
        memorySlots: number;
        minMemoryFrequency: number;
        maxMemoryFrequency: number;
        maxMemoryCapacity: number;
    };
}
