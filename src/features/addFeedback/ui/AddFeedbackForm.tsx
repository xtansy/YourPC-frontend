import { yupResolver } from "@hookform/resolvers/yup";
import {
    TextField,
    Rating,
    Stack,
    Avatar,
    Button,
    Typography,
    Snackbar,
    Alert,
} from "@mui/material";
import {
    type FeedbackFormSchema,
    feedbackFormSchema,
} from "../model/feedbackFormSchema";
import { useForm, Controller } from "react-hook-form";
import { addFeedbacktAsync } from "entities/product";
import { useAppDispatch, useAppSelector } from "shared/model";
import { productSelector } from "entities/product";
import { SyntheticEvent, useState } from "react";

export const AddFeedbackForm = () => {
    const [open, setOpen] = useState(false);
    const product = useAppSelector(productSelector);
    const dispatch = useAppDispatch();
    const {
        reset,
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FeedbackFormSchema>({
        resolver: yupResolver(feedbackFormSchema),
    });

    const onSubmit = (data: FeedbackFormSchema) => {
        if (product?._id) {
            const props = {
                id: product._id,
                feedback: data,
            };
            dispatch(addFeedbacktAsync(props))
                .unwrap()
                .then(() => {
                    handleOpen();
                    reset();
                });
        }
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (_event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };
    return (
        <>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: "100%", color: "white" }}
                >
                    Отзыв успешно добавлен!
                </Alert>
            </Snackbar>
            <Stack direction="row" spacing={2}>
                <Avatar>А</Avatar>
                <Stack
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    spacing={1}
                    width="50%"
                >
                    <TextField
                        {...register("text")}
                        error={Boolean(errors.text)}
                        fullWidth
                        label="Отзыв"
                        variant="outlined"
                        multiline
                        rows={4}
                    />
                    <Typography color="error.main">
                        {errors.text?.message}
                    </Typography>
                    <Controller
                        name="rate"
                        control={control}
                        render={({ field }) => (
                            <Rating
                                {...field}
                                size="large"
                                precision={0.5}
                                max={5}
                                value={field.value || 0}
                                onChange={(_event, value) =>
                                    field.onChange(value)
                                }
                            />
                        )}
                    />
                    <Typography color="error.main">
                        {errors.rate?.message}
                    </Typography>
                    <Button
                        sx={{ width: "180px" }}
                        type="submit"
                        variant="outlined"
                    >
                        Добавить отзыв
                    </Button>
                </Stack>
            </Stack>
        </>
    );
};
