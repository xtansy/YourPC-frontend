import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { refreshTokens } from ".";

import { config } from "./config";

export const api = axios.create({
	// withCredentials: true,
	baseURL: config.baseUrl,
});

api.interceptors.request.use((config) => {
	const accessToken = localStorage.getItem("accessToken");
	config.headers.Authorization = `Bearer ${accessToken}`;
	return config;
});

interface ExtendedAxiosRequestConfig extends AxiosRequestConfig {
	_isRetry?: boolean;
}

api.interceptors.response.use(
	(config) => config,
	async (error: AxiosError) => {
		const originalRequest = error.config as ExtendedAxiosRequestConfig;
		if (
			error.response?.status === 401 &&
			originalRequest &&
			!originalRequest._isRetry
		) {
			originalRequest._isRetry = true;
			const { accessToken } = await refreshTokens();
			localStorage.setItem("accessToken", accessToken);
			return api.request(originalRequest);
		}
		throw error;
	}
);
