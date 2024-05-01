import * as yup from "yup";

export interface LoginFormSchema {
    login: string;
    password: string;
}

export const loginFormSchema = yup
    .object({
        login: yup
            .string()
            .min(5, "Логин должен быть от 5 символов")
            .required(),
        password: yup
            .string()
            .min(6, "Пароль должен быть от 5 символов")
            .max(24)
            .required(),
    })
    .required();
