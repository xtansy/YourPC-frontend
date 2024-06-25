import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    type LoginProps,
    type LoginResponse,
    type RegisterResponse,
    type RegisterProps,
    EditProps,
} from "../api/types";

import { login, register, logout, edit } from "../api/requests";
import { AxiosError } from "axios";
import { User } from "./types";

export const loginAsync = createAsyncThunk<LoginResponse, LoginProps>(
    "user/login",
    async (props: LoginProps, { rejectWithValue }) => {
        try {
            const data = await login(props);
            return data;
        } catch (err: unknown) {
            const axiosError = err as AxiosError<{ errorMessage: string }>;
            return rejectWithValue(axiosError.response?.data);
        }
    }
);

export const registerAsync = createAsyncThunk<RegisterResponse, RegisterProps>(
    "user/register",
    async (props: RegisterProps, { rejectWithValue }) => {
        try {
            const data = await register(props);
            return data;
        } catch (err: unknown) {
            const axiosError = err as AxiosError<{ errorMessage: string }>;
            return rejectWithValue(axiosError.response?.data);
        }
    }
);

export const editAsync = createAsyncThunk<User, EditProps>(
    "user/edit",
    async (props: EditProps, { rejectWithValue }) => {
        try {
            const data = await edit(props);
            return data;
        } catch (err: unknown) {
            const axiosError = err as AxiosError<{ errorMessage: string }>;
            return rejectWithValue(axiosError.response?.data);
        }
    }
);

export const logoutAsync = createAsyncThunk("user/logout", () => {
    return logout();
});
