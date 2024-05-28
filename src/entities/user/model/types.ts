export interface User {
    _id: string;
    login: string;
    name: string;
    surname: string;
    email: string;
    role: string;
}

export type UserModel = {
    isAuth: boolean;
    isLoading: boolean;
    user?: User;
};
