interface ConfigAPI {
    baseUrl: string;
    paths: {
        products: {
            getAll: string;
        };
        user: {
            refresh: string;
            register: string;
            login: string;
            logout: string;
        };
    };
    user: {
        login: string;
        password: string;
    };
}

export const config: ConfigAPI = {
    baseUrl: "http://localhost:3030/",
    paths: {
        products: {
            getAll: "/products/",
        },
        user: {
            register: "/user/register",
            login: "/user/login",
            logout: "/user/logout",
            refresh: "/user/refresh",
        },
    },
    user: {
        login: "userTest",
        password: "pass123",
    },
};
