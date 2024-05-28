import {
    type LoginProps,
    type LoginResponse,
    type RegisterProps,
    type RegisterResponse,
} from "./types";
import { Response, config, api } from "shared/api";

export const login = async (props: LoginProps) => {
    const { data } = await api.post<Response<LoginResponse>>(
        config.paths.user.login,
        props
    );
    return data.data;
};

export const register = async (props: RegisterProps) => {
    const { data } = await api.post<Response<RegisterResponse>>(
        config.paths.user.register,
        props
    );
    return data.data;
};

export const logout = async () => {
    const { data } = await api.post<Response<string>>(config.paths.user.logout);
    return data.data;
};
