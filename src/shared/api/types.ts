export interface Response<T> {
    message: string;
    data: T;
}

export interface RefreshResponse {
    accessToken: string;
}
