import { type RecoveryFormSchema } from "../model/recoveryFormSchema";
import { User } from "entities/user/model/types";
import { api, config, type Response } from "shared/api";

export const recovery = async (props: RecoveryFormSchema) => {
    const { data } = await api.post<Response<User>>(
        config.paths.user.recovery,
        props
    );
    return data;
};
