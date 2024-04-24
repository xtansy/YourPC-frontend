export interface User {
	_id: string;
	login: string;
}

export type UserModel = {
	isAuth: boolean;
	isLoading: boolean;
	user?: User;
};
