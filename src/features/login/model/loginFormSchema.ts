import * as yup from "yup";

export interface LoginFormSchema {
	login: string;
	password: string;
}

export const loginFormSchema = yup
	.object({
		login: yup.string().min(5).required(),
		password: yup.string().min(6).max(24).required(),
	})
	.required();
