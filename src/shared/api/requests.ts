import { api } from "./instance";
import { config } from "./config";
import { RefreshResponse, Response } from "./types";

const { paths } = config;

export const refreshTokens = async () => {
    const { data } = await api.get<Response<RefreshResponse>>(
        paths.user.refresh
    );
    return data.data;
};
