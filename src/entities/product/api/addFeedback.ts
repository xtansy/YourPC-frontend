import { type IProduct } from "../model";
import { type Response, api, config } from "shared/api";

export interface AddFeedbackProps {
    id: IProduct["_id"];
    feedback: { text: string; rate: number };
}

export const addFeedback = async (props: AddFeedbackProps) => {
    const { data } = await api.post<Response<IProduct>>(
        config.paths.products.addFeedback,
        props
    );
    return data.data;
};
