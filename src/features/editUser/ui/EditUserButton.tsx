import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export const EditUserButton = () => {
    const navigate = useNavigate();

    const onClickEdit = () => {
        navigate("/profileEdit");
    };

    return (
        <Button
            onClick={onClickEdit}
            variant="outlined"
            color="info"
            size="large"
        >
            Редактировать
        </Button>
    );
};
