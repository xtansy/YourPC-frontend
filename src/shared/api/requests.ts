import { api } from "./instance";
import { config } from "./config";
import { HeadphoneDto, RefreshResponse, Response } from "./types";

const { paths } = config;

export const getProducts = async () => {
    const { data } = await api.get<Response<HeadphoneDto[]>>(
        paths.products.getAll
    );
    return data.data;
};

export const refreshTokens = async () => {
    const { data } = await api.get<Response<RefreshResponse>>(
        paths.user.refresh
    );
    return data.data;
};
