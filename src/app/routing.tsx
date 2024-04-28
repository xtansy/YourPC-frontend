import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "shared/ui/";
import { useAppSelector } from "shared/model";

import { MainPage } from "pages/main";
import { CartPage } from "pages/cart";
import { LoginPage } from "pages/login";
import { FavoritesPage } from "pages/favorites";
import { CatalogPage } from "pages/catalog";
import { ProfilePage } from "pages/profile";

import { isAuthSelector } from "entities/user";

import { Header } from "widgets/header";
import { Footer } from "widgets/footer";
import { HeaderMenu } from "widgets/headerMenu";

interface GuardProps {
    children: React.ReactNode;
    isLoginPage?: boolean;
}

const Guard = ({ children, isLoginPage }: GuardProps) => {
    const isAuthorized = useAppSelector(isAuthSelector);

    if (isLoginPage && isAuthorized) {
        return <Navigate to="/" />;
    }

    if (!isLoginPage && !isAuthorized) {
        return <Navigate to="/login" />;
    }

    return children;
};

export const Routing = () => {
    return (
        <Routes>
            <Route
                element={
                    <Layout
                        header={<Header rightSlot={<HeaderMenu />} />}
                        footer={<Footer />}
                    />
                }
            >
                <Route path="/" element={<MainPage />} />
                <Route path="/catalog" element={<CatalogPage />} />

                <Route
                    path="/profile"
                    element={
                        <Guard>
                            <ProfilePage />
                        </Guard>
                    }
                />

                <Route
                    path="/cart"
                    element={
                        <Guard>
                            <CartPage />
                        </Guard>
                    }
                />
                <Route
                    path="/favorites"
                    element={
                        <Guard>
                            <FavoritesPage />
                        </Guard>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Guard isLoginPage>
                            <LoginPage />
                        </Guard>
                    }
                />
            </Route>
        </Routes>
    );
};
