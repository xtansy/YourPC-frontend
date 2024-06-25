import * as yup from "yup";

export interface FeedbackFormSchema {
    text: string;
    rate: number;
}

export const feedbackFormSchema = yup
    .object({
        text: yup
            .string()
            .min(10, "Отзыв должен быть не менее 10 символов")
            .max(500, "Отзыв должен быть не более 500 символов")
            .required("Отзыв обязателен"),
        rate: yup.number().required("Рейтинг обязателен"),
    })
    .required();
