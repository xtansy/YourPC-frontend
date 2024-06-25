import * as yup from "yup";

export interface RecoveryFormSchema {
    email: string;
}

export const recoveryFormSchema = yup
    .object({
        email: yup
            .string()
            .email("Неверный формат почты")
            .required("Почта обязательна"),
    })
    .required();
