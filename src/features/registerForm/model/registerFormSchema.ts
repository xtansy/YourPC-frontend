import * as yup from "yup";

export interface RegisterFormSchema {
    login: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const registerFormSchema = yup
    .object({
        login: yup
            .string()
            .min(5, "Логин должен быть от 5 символов")
            .max(24, "Логин до 15 символов")
            .required("Логин обязателен"),
        name: yup
            .string()
            .min(2, "Имя от 2 символов")
            .max(24, "Имя до 24 символов")
            .required("Имя обязательно"),
        surname: yup
            .string()
            .min(4, "Фамилия от 4 символов")
            .max(24, "Фамилия до 24 символов")
            .required("Фамилия обязательна"),
        email: yup
            .string()
            .email("Неверный формат почты")
            .required("Почта обязательна"),
        password: yup
            .string()
            .min(6, "Пароль должен быть от 6 символов")
            .max(24, "Пароль должен быть не больше 24 символов")
            .required("Пароль обязателен"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "Пароли не совпадают")
            .required("Подтвердите пароль"),
    })
    .required();
