import { ReactNode } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "shared/ui/";
import { useAppSelector } from "shared/model";

import { CartPage } from "pages/cart";
import { LoginPage } from "pages/login";
import { FavoritesPage } from "pages/favorites";
import { CatalogPage } from "pages/catalog";
import { ProfilePage } from "pages/profile";
import { ProductsPage } from "pages/products";
import { ProductPage } from "pages/product";
import { RegisterPage } from "pages/register";
import { RecoveryPage } from "pages/recovery/";
import { ProfileEditPage } from "pages/profileEdit";
import { OrdersPage } from "pages/orders";
import { ComparisonPage } from "pages/comparison";

import { isAuthSelector } from "entities/user";

import { Header } from "widgets/header";
import { Footer } from "widgets/footer";
import { HeaderMenu } from "widgets/headerMenu";

interface GuardProps {
    children: ReactNode;
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
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/comparison" element={<ComparisonPage />} />

                <Route path="/" element={<ProductsPage />} />
                <Route path="/videocards" element={<ProductsPage />} />
                <Route path="/motherboards" element={<ProductsPage />} />
                <Route path="/rams" element={<ProductsPage />} />
                <Route path="/processors" element={<ProductsPage />} />

                <Route
                    path="/orders"
                    element={
                        <Guard>
                            <OrdersPage />
                        </Guard>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <Guard>
                            <ProfilePage />
                        </Guard>
                    }
                />
                <Route
                    path="/profileEdit"
                    element={
                        <Guard>
                            <ProfileEditPage />
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
                    path="/register"
                    element={
                        <Guard isLoginPage>
                            <RegisterPage />
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

                <Route
                    path="/recovery"
                    element={
                        <Guard isLoginPage>
                            <RecoveryPage />
                        </Guard>
                    }
                />
            </Route>
        </Routes>
    );
};
