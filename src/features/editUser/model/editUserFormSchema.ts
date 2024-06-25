import * as yup from "yup";

export interface EditUserFormSchema {
    name: string;
    surname: string;
    email: string;
}

export const editUserFormSchema = yup
    .object({
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
    })
    .required();
