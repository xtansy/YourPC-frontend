import { type User } from "../model/types";

export interface LoginProps {
    login: string;
    password: string;
}

export interface RegisterProps {
    login: string;
    name: string;
    surname: string;
    email: string;
    password: string;
}

export interface EditProps {
    name: string;
    surname: string;
    id: string;
}

export interface LoginResponse extends User {
    accessToken: string;
}

export interface RegisterResponse extends User {
    accessToken: string;
}
