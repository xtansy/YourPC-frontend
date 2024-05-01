import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ListAltIcon from "@mui/icons-material/ListAlt";

export const HeaderMenuAuth = () => {
    const navigate = useNavigate();

    const onClickFav = () => {
        navigate("/favorites");
    };

    const onClickCart = () => {
        navigate("/cart");
    };

    const onClickProfile = () => {
        navigate("/profile");
    };

    const onClickOrders = () => {
        navigate("/orders");
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Button
                onClick={onClickOrders}
                sx={{ color: "white" }}
                size="large"
            >
                <ListAltIcon sx={{ marginRight: "5px" }} />
                Заказы
            </Button>
            <Button onClick={onClickFav} sx={{ color: "white" }} size="large">
                <FavoriteIcon sx={{ marginRight: "5px" }} />
                Понравившиеся
            </Button>
            <Button onClick={onClickCart} sx={{ color: "white" }} size="large">
                <ShoppingCartIcon sx={{ marginRight: "5px" }} />
                Корзина
            </Button>
            <Button
                onClick={onClickProfile}
                sx={{ color: "white" }}
                size="large"
            >
                <AccountBoxIcon sx={{ marginRight: "5px" }} />
                Профиль
            </Button>
        </Box>
    );
};
