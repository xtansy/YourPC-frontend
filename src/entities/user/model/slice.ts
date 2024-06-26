import { createSlice } from "@reduxjs/toolkit";

import { type UserModel } from "./types";
import {
    registerAsync,
    loginAsync,
    logoutAsync,
    editAsync,
} from "./asyncThunk";

const initialState: UserModel = {
    isAuth: false,
    isLoading: false,
};

export const userModel = createSlice({
    name: "user",
    initialState,
    reducers: {
        clearUserData: (state) => {
            state.isAuth = false;
            state.isLoading = false;
            state.user = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerAsync.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(registerAsync.fulfilled, (state, { payload }) => {
                const { accessToken, ...user } = payload;
                localStorage.setItem("accessToken", accessToken);
                state.isLoading = false;
                state.user = user;
                state.isAuth = true;
            })

            .addCase(loginAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginAsync.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(loginAsync.fulfilled, (state, { payload }) => {
                const { accessToken, ...user } = payload;
                localStorage.setItem("accessToken", accessToken);
                state.isLoading = false;
                state.user = user;
                state.isAuth = true;
            })

            .addCase(logoutAsync.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logoutAsync.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(logoutAsync.fulfilled, (state) => {
                state.isAuth = false;
                state.isLoading = false;
                state.user = undefined;
                localStorage.removeItem("accessToken");
            })

            .addCase(editAsync.fulfilled, (state, { payload }) => {
                state.user = payload;
            });
    },
});

export const { clearUserData } = userModel.actions;
